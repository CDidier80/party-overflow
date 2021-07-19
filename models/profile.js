const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    handle: {
        type: String,
        required: true,
        unique: true,
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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema)