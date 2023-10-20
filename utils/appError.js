class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
  
      // pura errors k details server level pe
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default AppError;