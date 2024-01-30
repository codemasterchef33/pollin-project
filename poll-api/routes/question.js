const express = require('express');
const router = express.Router();
const questionSetController = require('../controllers/questionController');

// Route to create a new question set
router.post('/question-sets', questionSetController.createQuestionSet);

// Route to fetch all question sets
router.get('/question-sets', questionSetController.getAllQuestionSets);

// Route to update a question set
router.put('/question-sets/:id', questionSetController.updateQuestionSet);

module.exports = router;
