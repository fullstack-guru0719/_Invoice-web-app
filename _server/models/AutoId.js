const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoIdSchema = new Schema(
    {
        field_name: {
            type: String,
            trim: true
        },
        field_value: {
            type: Number,
            required: true
        },
        field_counts: {
            type: Number,
            default: 0,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const AutoId = mongoose.model('AutoId', AutoIdSchema);

module.exports = { AutoId };
