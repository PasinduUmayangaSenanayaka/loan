// routes/loanDocuments.js
const express = require('express');
const router = express.Router();
const LoanDocument = require('../models/LoanDocument');

// GET all loan documents
router.get('/', async (req, res) => {
  try {
    const loanDocuments = await LoanDocument.find();
    res.json(loanDocuments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new loan document
router.post('/', async (req, res) => {
  try {
    const newLoanDocument = new LoanDocument(req.body);
    const savedLoanDocument = await newLoanDocument.save();
    res.json(savedLoanDocument);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add more routes for updating, deleting, etc.

module.exports = router;
