const express = require('express');
const router = express.Router();

const passport = require('passport');

const { Message } = require('../models/Message');
const { createErrorObject } = require('../middleware/authenticate');

/**
 * @description GET /api/message/
 */
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log('[request user id]', req.user._id);
    const message = await Message.findOne({ user: req.user._id });

    if (message) {
        return res.status(200).json(message);
    } else {
        const newMessage = await new Message({ user: req.user._id }).save();
        return res.status(200).json(newMessage);
    }
});

/**
 * @description PUT /api/message/
 */
router.put('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let errors = [];
    const userId = req.user._id;
    const { key, value } = req.body;
    const message = await Message.findOne({ user: userId });
    if (!userId || !message) {
        errors.push({ param: 'no_content', msg: 'No message id' });
        return res.json({ errors: createErrorObject(errors) });
    }

    message[key] = value;
    await message.save();

    return res.status(200).json(message);
});

module.exports = router;
