// controllers/pollController.js

const Poll = require("../models/poll");

// Function to create a new poll
async function createPoll(req, res) {
  try {
    const { title, category, startDate, endDate, minReward, maxReward } =
      req.body;

    // Validate input
    if (
      !title ||
      !category ||
      !startDate ||
      !endDate ||
      !minReward ||
      !maxReward
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // logic to create a new poll
    const poll = await Poll.create({
      title,
      category,
      startDate,
      endDate,
      minReward,
      maxReward,
    });

    res.status(201).json({ poll });
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
// Function to fetch all polls
async function getAllPolls(req, res) {
  try {
    // logic to fetch all polls
    const polls = await Poll.findAll();
    res.status(200).json({ polls });
  } catch (error) {
    console.error("Error fetching polls:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Function to update a poll
async function updatePoll(req, res) {
  try {
    const { id } = req.params;
    const { title, category, startDate, endDate, minReward, maxReward } =
      req.body;

    // Validate input
    if (
      !id ||
      !title ||
      !category ||
      !startDate ||
      !endDate ||
      !minReward ||
      !maxReward
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if the poll exists
    const poll = await Poll.findByPk(id);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    // logic to update a poll
    await poll.update({
      title,
      category,
      startDate,
      endDate,
      minReward,
      maxReward,
    });

    res.status(200).json({ poll });
  } catch (error) {
    console.error("Error updating poll:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getNumberOfQuestionSets(req, res) {
  const { pollId } = req.params;

  try {
    const poll = await Poll.findByPk(pollId);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    
    const numberOfQuestionSets = await poll.countQuestionSets();


    res.status(200).json({ numberOfQuestionSets });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Export the controller functions
module.exports = {
  createPoll,
  getAllPolls,
  updatePoll,
  getNumberOfQuestionSets,
};
