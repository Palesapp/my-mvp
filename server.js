const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const dbConfig = require('./config/dbConfig');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Database connection
dbConfig();
