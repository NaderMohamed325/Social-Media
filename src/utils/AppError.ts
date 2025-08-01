class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    // Set the prototype explicitly
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
export default AppError;
