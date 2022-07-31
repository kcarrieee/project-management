const express = require('express')
const router = express.Router()
const { getProjects, 
        createProjects, 
        getSingleProject,
        deleteProject,
        updateProject
    } = require('../controllers/projectController')
const { protect } = require('../middleware/authMiddle')

router.route('/projects').get(protect, getProjects).post(protect, createProjects)
router.route('/:id').get(protect, getSingleProject).delete(protect, deleteProject).put(protect, updateProject)

module.exports = router