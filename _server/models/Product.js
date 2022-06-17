const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
