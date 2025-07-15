import express from 'express';
import { app } from './app';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { userRouter } from './router/userRouter';
import morgan from 'morgan';




const port = 8000;

app.use(express.json());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter);

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.listen(port, () => {
  console.log(`Better Auth app listening on port ${port}`);
});
