// server.js
const express = require('express');
const mongoose = require('mongoose');
const loanDocumentRoutes = require('./routes/loanDocuments');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loandocument', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/loan-documents', loanDocumentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
