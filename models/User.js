var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: [
            6,
            "Your password needs to be longer."
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
