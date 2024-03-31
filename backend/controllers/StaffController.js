const Staff = require('../modules/staffModel');

// Función para obtener las asignaturas de un profesor por ID
exports.getStaff = async (req, res) => {
    const staffId = req.params.id;

    try {
        const staff = await Staff.findById(staffId)
            .populate('subjectId');

        if (!staff) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }

        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
