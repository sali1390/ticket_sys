var mongoose = require("mongoose");

Schema = mongoose.Schema;

var TicketSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    files: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

var Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
