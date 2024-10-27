class ApiError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: string[];

  constructor(statusCode: number, message = "", stack = "", errors:string[] = []) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export default ApiError;