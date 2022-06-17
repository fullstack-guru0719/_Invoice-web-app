const express = require('express');
const router = express.Router();

const passport = require('passport');

const { Client } = require('../models/Client');
const { User } = require('../models/User');
const { createErrorObject } = require('../middleware/authenticate');

/**
 * @description GET /api/client/:vendor_id
 */
router.get('/:room_id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const messages = await Message.find({ room: req.params.room_id });

    if (messages) {
        return res.status(200).json(messages);
    } else {
        return res.status(404).json({ error: 'No messages found' });
    }
});

/**
 * @description POST /api/client/
 */
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let errors = [];
    const { id, name, address, phone, email } = req.body;
    const vendor = await User.findById(id);
    if (!id || !vendor) {
        errors.push({ param: 'no_content', msg: 'No vendor id' });
        return res.json({ errors: createErrorObject(errors) });
    }

    const newClient = await new Client({
        name,
        address,
        email,
        phone
    }).save();

    User.findByIdAndUpdate(
        id,
        { $push: { clients: newClient._id } },
        { new: true, upsert: true },
        function(err, vendor) {
            if (err) throw err;
        }
    );

    return res.status(200).json(newClient);
});

module.exports = router;
