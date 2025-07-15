import { Request, Response, NextFunction } from 'express';
import { auth } from '../lib/auth';
import AppError from '../utils/AppError';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = await auth.api.getSession({
      headers: req.headers as any,
    });
    
    if (!session) {
      return next(new AppError('Authentication required', 401));
    }
    
    req.user = session.user;
    next();
  } catch (error) {
    next(new AppError('Authentication failed', 401));
  }
};