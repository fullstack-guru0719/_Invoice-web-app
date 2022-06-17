const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            trim: true
        },
        vendor: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'Client'
        },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                description: {
                    type: Schema.Types.String
                }
            }
        ],
        tax: {
            type: Number
        },
        status: {
            type: String,
            default: 'draft'
        },
        billfor: {
            type: String
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = { Invoice };
