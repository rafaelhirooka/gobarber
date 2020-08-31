import { Router } from 'express';

const appoinmentsRouter = Router();

appoinmentsRouter.post('/', async (req, res) => {
  try {
    return res.send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appoinmentsRouter;
