const express = require('express');
const router = express.Router();

const passport = require('passport');

const { Invoice } = require('../models/Invoice');

const { createErrorObject } = require('../middleware/authenticate');
const { getValueForNextSequence } = require('../helpers/utils');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const smsclient = require('twilio')(accountSid, authToken);

/**
 * @description GET /api/invoice/:invoice_id
 */
router.get('/:invoice_id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (!req.params.invoice_id) return;

    const invoice = await Invoice.findOne({ _id: req.params.invoice_id })
        .populate('client')
        .populate('products.product');

    const voidedInivoices = await Invoice.find({
        id: { $regex: invoice.id.replace(/\D/g, ''), $options: 'i' },
        status: 'void'
    })
        .populate('client')
        .populate('products.product');

    if (invoice) {
        return res.status(200).json({ ...invoice._doc, voidedInivoices });
    } else {
        return res.status(404).json({ error: 'No invoices found' });
    }
});
/**
 * @description GET /api/invoice/
 */
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (!req.user || !req.user._id) return;

    const invoices = await Invoice.find({ vendor: req.user._id })
        .populate('client')
        .populate('products.product');
    console.log('[get invoices]', invoices.length);

    if (invoices) {
        return res.status(200).json(invoices);
    } else {
        return res.status(404).json({ error: 'No invoices found' });
    }
});
/**
 * @description POST /api/invoice/
 */
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let errors = [];
    const { id, orgId, vendor, client, billfor, products, tax, status } = req.body;

    if (!req.body.vendor) {
        errors.push({ param: 'no_content', msg: 'Check the fields again' });
        return res.json({ errors: createErrorObject(errors) });
    }

    const formatedProducts = products.map(product => ({ ...product, product: product._id }));
    const fields = {
        vendor,
        client,
        billfor,
        products: formatedProducts,
        tax,
        status
    };
    // find out `_id` from product list and save it as `id`

    // create a new invoice
    if (!orgId) {
        const autoIncId = await getValueForNextSequence('invoice', null);
        const newInvoice = await new Invoice({ ...fields, id: autoIncId }).save();

        if (status === 'sent') {
            console.log('[send invoice  ]');

            smsclient.messages
                .create({
                    body: `Please click this link, https://localhost:3000/${newInvoice._id}`,
                    from: '+12818019195',
                    to: '+12814756111'
                })
                .then(message => console.log(message.sid))
                .catch(error => console.log('error', error));
        }
        return res.status(200).json(newInvoice);
    }

    // it is draft, so update it
    const orgInvoice = await Invoice.findOne({ _id: orgId });
    if (orgInvoice.status === 'draft') {
        Object.entries(fields).forEach(([key, value]) => (orgInvoice[key] = value));
        await orgInvoice.save();
        return res.status(200).json(orgInvoice);
    }

    // it was sent already, create a new
    if (orgInvoice.status === 'sent') {
        const autoIncId = await getValueForNextSequence('invoice', id);
        const newInvoice = await new Invoice({ ...fields, id: autoIncId }).save();
        orgInvoice.status = 'void';
        await orgInvoice.save();
        return res.status(200).json(newInvoice);
    }
    return res.status(500).json({ success: false });
});

module.exports = router;
