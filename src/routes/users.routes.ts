import { Router } from 'express';
import CreateUserRepository from '../services/CreateUserService';

const appoinmentsRouter = Router();

appoinmentsRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserRepository();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default appoinmentsRouter;
