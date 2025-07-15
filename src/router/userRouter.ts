import { Router } from 'express';
import { getAllUsers } from '../controller/userController';

const userRouter = Router();

userRouter.get('/users', getAllUsers);
export { userRouter };
