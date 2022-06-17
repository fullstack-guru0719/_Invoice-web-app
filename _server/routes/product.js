const express = require('express');
const router = express.Router();

const passport = require('passport');

const { Product } = require('../models/Product');
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
 * @description POST /api/product/
 */
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let errors = [];
    const { _id } = req.user;
    const { name, price, description } = req.body;

    const newproduct = await new Product({
        name,
        price,
        description
    }).save();

    const newUser = await User.findOneAndUpdate(
        { _id },
        { $addToSet: { products: newproduct._id } },
        { safe: true, upsert: true, useFindAndModify: true },
        function(err, vendor) {
            if (err) throw err;
        }
    );

    return res.status(200).json(newproduct);
});

module.exports = router;
