const mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.connect("mongodb://localhost:27017/maacabi", { useUnifiedTopology: true, useNewUrlParser: true });

const Schema = mongoose.Schema;


mongoose.set('useCreateIndex', true);

let UserSchame = new Schema(
    {
        userName: {
            type: String,
            required: true,
            minlength: 3
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            minlength: 0
        },
        age: {
            type: Number,
            min: 1
        },
    },
);
const User = mongoose.model('User', UserSchame)


module.exports = User;
