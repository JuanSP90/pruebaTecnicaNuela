const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
    classroom: {
        type: String,
        required: true
    }
});

const Subjects = mongoose.model("Subjects", SubjectSchema);

module.exports = Subjects;