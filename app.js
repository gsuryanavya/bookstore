require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error('DB_URL environment variable is not set.');
  process.exit(1); // Exit process if DB_URL is missing
}

app.use(express.json());

// Route configuration
const bookRoutes = require('./routes/bookRoute');
app.use('/api', bookRoutes);

// Connect to MongoDB
mongoose.connect(DB_URL)
.then(() => console.log('Connected to database successfully'))
.catch(error => console.error('Error connecting to database:', error));

app.listen(PORT, () => {
  console.log(`Server started running at http://localhost:${PORT}/`);
});
