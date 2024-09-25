import mongoose, { Schema } from 'mongoose';

const AppointmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor', 
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'], 
        default: 'Pending'
    }
}, {
    timestamps: true 
});


const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
