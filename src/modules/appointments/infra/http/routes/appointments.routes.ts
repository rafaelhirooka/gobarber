import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appoinmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appoinmentsRouter.use(ensureAuthenticated);

// appoinmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find();
//   return res.json(appointments);
// });

appoinmentsRouter.post('/', appointmentsController.create);

export default appoinmentsRouter;
