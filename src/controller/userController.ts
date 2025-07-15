import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';
import AppError from '../utils/AppError';
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({
      status: 'sucess',
      data: allUsers,
    });
    return;
  } catch (_) {
    next(new AppError('Error in Fetching Users', 500));
    return;
  }
};




export { getAllUsers };
