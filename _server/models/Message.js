const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        sent: {
            type: String,
            required: true,
            default: 'This is (companyname), Here is your link to payment'
        },
        reminder: {
            type: String,
            required: true,
            default:
                'This is (companyname), We have not received your payment. Here is your link to payment'
        },
        cycle: {
            type: String,
            required: true,
            default: 'daily'
        }
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message };
