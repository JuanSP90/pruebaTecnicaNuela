const express = require("express");
const subject = express.Router();
const SubjectController = require("../controllers/SubjectController")

subject.post('/:staffId', SubjectController.createSubjectAndAssignToStaff);

module.exports = subject