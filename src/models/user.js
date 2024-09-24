import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    gender: { type: String, required: true },
    image: { type: String },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    token: { type: String },
    address: { type: String },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
