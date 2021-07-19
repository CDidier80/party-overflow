const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const userSchema = new mongoose.Schema({
    handle: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    solution_count: {
        type: Number,
        required: false,
        default: 0,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamps: true
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password
        return ret
    }
})

userSchema.pre('save', function (next) {
    // maybe this is a convention I'm not aware of, but
    // it's very confusing seeing for the first time. Why
    // does a callback function's 'this' binding equate to
    // a user?
    const user = this
    if (!user.isModified('password')) return next()
    // this isn't semantic enough. There are too many nested functions
    // and line 55 makes it unclear whether these callback functions
    // are just functions or correspond to a model or other entity.
    // I think the goal here should be to make this read like english,
    // step by step because I have no idea what's going on. If I have no
    // idea what's going on it's YOUR FAULT HUNTER lol
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

// change cb name to whatever it actually is
// if that means callback, use 'callback'
userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema)