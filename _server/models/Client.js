const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const Client = mongoose.model('Client', ClientSchema);

module.exports = { Client };
