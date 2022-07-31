const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Project = require('../models/projectModel')

// @desc    get user projects
// @route   /api/projects GET
// @access  Private

const getProjects = asyncHandler(async (req, res) => {

    //get user using ID and JWT
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const projects = await Project.find({user: req.user.id})
    res.status(200).json(projects)

})


// @desc    get user projects
// @route   /api/projects POST
// @access  Private

const createProjects = asyncHandler(async (req, res) => {

    const {theme, description } = req.body

    if(!theme || !description){
        res.status(400)
        throw new Error('Add a theme, description, status')
    }

     //get user using ID and JWT
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const project = await Project.create({
        theme,
        description, 
        user: req.user.id,
        status: 'new'
    })
    
    res.status(201).json(project)
})


// @desc    get single user project
// @route   /api/projects/:id 
// @access  Private

const getSingleProject = asyncHandler(async (req, res) => {

    //get user using ID and JWT
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(404)
        throw new Error('Project not found')
    }
    if(project.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not Authorized')
    } 
    res.status(200).json(project)

})

// @desc    Delete projects
// @route   DELETE /api/projects/:id
// @access  Private

const deleteProject = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Project.findById(req.params.id)

  if (!project) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await project.remove()

  res.status(200).json({ success: true })
})

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private

const updateProject = asyncHandler(async (req, res) => {
    
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Project.findById(req.params.id)

  if (!project) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (project.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedProject)
})


module.exports = {
    getProjects,
    createProjects,
    getSingleProject,
    deleteProject,
    updateProject
}