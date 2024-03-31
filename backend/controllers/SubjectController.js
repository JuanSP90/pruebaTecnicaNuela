const Staff = require('../modules/staffModel');
const Subject = require('../modules/subjectModel');

// Función para crear una asignatura y asignarla a un profesor
exports.createSubjectAndAssignToStaff = async (req, res) => {
    try {
        const { staffId } = req.params;

        const staff = await Staff.findOne({
            _id: staffId,
        });

        if (!staff) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }

        const newSubject = new Subject({
            subjectName: req.body.subjectName,
            type: req.body.type,
            course: req.body.course,
            group: req.body.group,
            hour: req.body.hour,
            classroom: req.body.classroom
        });

        const subject = await newSubject.save();

        staff.subjectId.push(subject._id);
        await staff.save();

        res.status(201).json({ message: 'Asignatura creada y asignada al profesor correctamente', staff, subject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
