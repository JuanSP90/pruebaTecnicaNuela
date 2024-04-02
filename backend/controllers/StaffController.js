const Staff = require('../modules/staffModel');

// Función para obtener a un profesor por ID
exports.getStaff = async (req, res) => {
    try {
        const { staffId } = req.params;

        const staff = await Staff.findOne({
            _id: staffId,
        });

        if (!staff) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }

        const { _id, staffName, email, phone, subjectId } =
            await Staff.findById({
                _id: staffId,
            }).populate("subjectId");
        res.json({
            _id,
            staffName,
            email,
            phone,
            subjectId

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para obtener a todos los profesores
exports.getAllStaffs = async (req, res) => {
    try {
        const staffs = await Staff.find().select('_id');

        if (staffs.length === 0) {
            return res.status(404).json({ message: 'No hay profesores disponibles.' });
        }

        res.json(staffs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
