import Doctor from "../models/doctor.js";

// @route   GET api/doctor
// @desc    Get doctors by specialization
// @access  Public
// @req     { specialty }
export const getDoctorsBySpecialization = async (req, res) => {
    const { specialty } = req.query;
    if (!specialty) {
        return res.status(400).json({ error: 'Specialization is required' });
    }

    try {
        const doctors = await Doctor.find({ specialty })
            .sort({ rating: -1 });

        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching doctors' });
    }
};
