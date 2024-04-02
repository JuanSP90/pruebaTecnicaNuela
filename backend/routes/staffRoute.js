const express = require("express");
const staff = express.Router();
const StaffController = require("../controllers/StaffController")

staff.get('/all', StaffController.getAllStaffs);
staff.get('/:staffId', StaffController.getStaff);


module.exports = staff