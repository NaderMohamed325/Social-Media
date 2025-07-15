import { Router } from 'express';
import {
  getAllUsers,
  getMyComments,
  getMyLikes,
  getMyPosts,
  getMyProfile,
  getUserById,
} from '../controller/userController';
import { requireAuth } from '../middleware/auth';

const userRouter = Router();

userRouter.get('/users', getAllUsers);
userRouter.get('/users/me', requireAuth, getMyProfile); 
userRouter.get('/users/:id', getUserById);
userRouter.get('/me/posts', requireAuth, getMyPosts);
userRouter.get('/me/comments', requireAuth, getMyComments);
userRouter.get('/me/likes', requireAuth, getMyLikes);


export { userRouter };
