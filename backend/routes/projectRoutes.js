const express = require('express')
const router = express.Router()
const { getProjects, 
        createProjects, 
        getSingleProject,
        deleteProject,
        updateProject
    } = require('../controllers/projectController')
const { protect } = require('../middleware/authMiddle')
const noteRouter = require('./NoteRoutes')
router.use('/:projectId/notes', noteRouter)

router.route('/').get(protect, getProjects).post(protect, createProjects)
router.route('/:id')
    .get(protect, getSingleProject)
    .delete(protect, deleteProject)
    .put(protect, updateProject)

module.exports = router