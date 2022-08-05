const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    text: {
        type: String,
        required: [true, 'Add some text'],
        unique: true,
    },
    statusNote: {
      type: String,
      required: true,
      enum: ['new', 'in progress', 'done'],
      default: 'new',
    },
}, { timestamps: true})

module.exports = mongoose.model('Note', noteSchema )