const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    theme: {
        type: String,
        required: [true, 'Plese select a project type'],
        enum: ['Design', 'Development', 'Learning', 'Other']
    },
    description: {
        type: String,
        required: [true, 'Enter a description of the project'],
        unique: true,
    },
     status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
}, { timestamps: true})

module.exports = mongoose.model('Project', projectSchema )