declare namespace Express {
  interface Request {
    user?: {
      id: string;
      email: string;
      // Add other user properties as needed
    };
  }
}