const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Project = require('../models/projectModel')
const Note = require('../models/noteModel')


// @desc    get notes for project
// @route   /api/projects/:projectId/notes GET
// @access  Private

const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Project.findById(req.params.projectId)

  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ ticket: req.params.projectId })

  res.status(200).json(notes)
})

// @desc    Create ticket note
// @route   POST /api/projects/:projectId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Project.findById(req.params.projectId)

  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({
    text: req.body.text,
    statusNote: 'new',
    project: req.params.projectId,
    user: req.user.id,
  })

  res.status(200).json(note)
})
// @desc    Create ticket note
// @route   POST /api/projects/:projectId/notes
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Project.findById(req.params.projectId)

  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({
    text: req.body.text,
    statusNote: req.body.text,
    project: req.params.projectId,
    user: req.user.id,
  })

  res.status(200).json(note)
})

module.exports = {
  getNotes,
  addNote,
}
