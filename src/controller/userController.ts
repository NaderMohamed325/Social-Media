import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';
import AppError from '../utils/AppError';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({
      status: 'success',
      data: allUsers,
    });
  } catch (_) {
    next(new AppError('Error in Fetching Users', 500));
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return next(new AppError('User not found', 404));
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    next(new AppError('Error in Fetching User', 500));
  }
};

const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.id) {
      return next(new AppError('User not authenticated', 401));
    }
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });
    if (!user) {
      return next(new AppError('User not found', 404));
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    next(new AppError('Error in Fetching User Profile', 500));
  }
};

const getMyPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.id) return next(new AppError('User not authenticated', 401));
    const posts = await prisma.post.findMany({
      where: { authorId: req.user.id },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ status: 'success', data: posts });
  } catch (err) {
    next(new AppError('Error in Fetching Posts', 500));
  }
};

const getMyComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.id) return next(new AppError('User not authenticated', 401));
    const comments = await prisma.comment.findMany({
      where: { authorId: req.user.id },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ status: 'success', data: comments });
  } catch (err) {
    next(new AppError('Error in Fetching Comments', 500));
  }
};

const getMyLikes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.id) return next(new AppError('User not authenticated', 401));
    const likes = await prisma.like.findMany({
      where: { userId: req.user.id },
      include: { post: true },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ status: 'success', data: likes });
  } catch (err) {
    next(new AppError('Error in Fetching Likes', 500));
  }
};

export {
  getAllUsers,
  getUserById,
  getMyProfile,
  getMyPosts,
  getMyComments,
  getMyLikes,
};
