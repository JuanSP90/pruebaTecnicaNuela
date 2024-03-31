const express = require("express");
const staff = express.Router();
const StaffController = require("../controllers/StaffController")

staff.get('/', StaffController.getStaff);

module.exports = staff