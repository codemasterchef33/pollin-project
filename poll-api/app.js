const express = require("express");
const bodyParser = require("body-parser");
const pollRoutes = require("./routes/pollRoutes");
const questionSetRoutes = require("./routes/question");
const sequelize = require("./config/database"); 
const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Use poll routes
app.use("/api", pollRoutes);
app.use("/api", questionSetRoutes);

// Sync Sequelize models with database
sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("Database synced");
    // Start the server after syncing
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
