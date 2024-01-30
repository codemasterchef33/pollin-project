// questionSetController.js

const QuestionSet = require("../models/question");

async function createQuestionSet(req, res) {
  try {
    const { questionType, questionText, options } = req.body;

    // Validate input
    if (
      !questionType ||
      !questionText ||
      !options ||
      !Array.isArray(options) ||
      options.length === 0
    ) {
      return res.status(400).json({ error: "Invalid question set data" });
    }

    //  logic to create a new question set
    const questionSet = await QuestionSet.create({
      questionType,
      questionText,
      options,
    });

    res.status(201).json({ questionSet });
  } catch (error) {
    console.error("Error creating question set:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getAllQuestionSets(req, res) {
  try {
    //  logic to fetch all question sets
    const questionSets = await QuestionSet.findAll();
    res.status(200).json({ questionSets });
  } catch (error) {
    console.error("Error fetching question sets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateQuestionSet(req, res) {
  try {
    const { id } = req.params;
    const { questionType, questionText, options } = req.body;

    // Validate input
    if (
      !id ||
      !questionType ||
      !questionText ||
      !options ||
      !Array.isArray(options) ||
      options.length === 0
    ) {
      return res.status(400).json({ error: "Invalid question set data" });
    }

    // Check if the question set exists
    const questionSet = await QuestionSet.findByPk(id);
    if (!questionSet) {
      return res.status(404).json({ error: "Question set not found" });
    }

    //  logic to update a question set
    await questionSet.update({
      questionType,
      questionText,
      options,
    });

    res.status(200).json({ questionSet });
  } catch (error) {
    console.error("Error updating question set:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createQuestionSet,
  getAllQuestionSets,
  updateQuestionSet,
};
