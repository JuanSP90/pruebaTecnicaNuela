const Staff = require('../modules/staffModel');
const Subject = require('../modules/subjectModel');

// Función para crear una asignatura y asignarla a un profesor
exports.createSubjectAndAssignToStaff = async (req, res) => {
    try {
        const newSubject = new Subject({
            name: req.body.name,
            type: req.body.type,
            course: req.body.course,
            group: req.body.group,
            hour: req.body.hour,
            classroom: req.body.classroom
        });

        const subject = await newSubject.save();

        const staffId = req.body.staffId;
        const staff = await Staff.findById(staffId);

        if (!staff) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }

        staff.subjectId.push(subject._id);
        await staff.save();

        res.status(201).json({ message: 'Asignatura creada y asignada al profesor correctamente', subject, staff });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
