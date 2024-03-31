const express = require("express");
const subject = express.Router();
const SubjectController = require("../controllers/SubjectController")

subject.post('/', SubjectController.createSubjectAndAssignToStaff);

module.exports = subject