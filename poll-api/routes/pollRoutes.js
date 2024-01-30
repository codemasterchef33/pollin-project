// routes/pollRoutes.js

const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

// Route to create a new poll
router.post('/polls', pollController.createPoll);

// Route to fetch all polls
router.get('/polls', pollController.getAllPolls);

// Route to update a poll
router.put('/polls/:id', pollController.updatePoll);

router.get('/polls/:pollId/question-sets/count', pollController.getNumberOfQuestionSets);

module.exports = router;
