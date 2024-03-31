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

        const { staffName, email, phone, subjectId } =
            await Staff.findById({
                _id: staffId,
            }).populate("subjectId");
        res.json({
            staffName,
            email,
            phone,
            subjectId

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
