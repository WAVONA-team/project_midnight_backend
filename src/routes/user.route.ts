import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/index.js';

export const userRouter = express.Router();

userRouter.patch('/remove-app', authMiddleware, userController.removeApp);
userRouter.get('/search-history/:userId', authMiddleware, userController.getSearchHistory);
