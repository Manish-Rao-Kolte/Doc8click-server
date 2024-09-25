import mongoose, { Schema } from 'mongoose';
// import bcrypt from 'bcryptjs';

const DoctorSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    specialty: { type: String, required: true },
    rating: { type: Number, default: 0 },
    consultationCharge: { type: Number, required: true },
    hospital: { type: String, required: true },
    yearsOfPractice: { type: Number, required: true },
    details: { type: String, required: true },
});

// Pre-save hook for hashing password (if needed)
// DoctorSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// Compare password method (if needed)
// DoctorSchema.methods.comparePassword = async function (candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

// Create Doctor model
const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
