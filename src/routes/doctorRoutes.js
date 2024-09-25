import express from 'express';
import { getDoctorsBySpecialization } from '../controllers/doctorController.js'; 

const doctorRouter = express.Router();

doctorRouter.get('/', getDoctorsBySpecialization);

export default doctorRouter;