const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    staffName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subjectId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subjects'
        }

    ],
});

StaffSchema.pre('save', async function (next) {
    const staff = this;
    staff.email = staff.email.toLowerCase();
    next();
});

const Staffs = mongoose.model("Staffs", StaffSchema);

module.exports = Staffs;