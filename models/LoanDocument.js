// models/LoanDocument.js
const mongoose = require('mongoose');

const loanDocumentSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  // Add more fields as needed
});

const LoanDocument = mongoose.model('LoanDocument', loanDocumentSchema);

module.exports = LoanDocument;
