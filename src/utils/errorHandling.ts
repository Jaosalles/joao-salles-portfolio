// Global error handling utilities

export class AppError extends Error {
  public readonly code: string
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(
    message: string,
    code: string = 'INTERNAL_ERROR',
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.statusCode = statusCode
    this.isOperational = isOperational

    Error.captureStackTrace(this, this.constructor)
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof Error) {
    // Handle known error types
    return new AppError(error.message, 'UNKNOWN_ERROR', 500, false)
  }

  // Handle unknown errors
  return new AppError('An unexpected error occurred', 'UNKNOWN_ERROR', 500, false)
}

export const logError = (error: AppError, context?: Record<string, unknown>) => {
  const logData = {
    name: error.name,
    message: error.message,
    code: error.code,
    statusCode: error.statusCode,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  }

  if (error.isOperational) {
    console.error('Operational Error:', logData)
  } else {
    console.error('Programming Error:', logData)
    // In production, send to error reporting service
    // reportError(logData)
  }
}

export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = handleError(event.reason)
    logError(error, { type: 'unhandledrejection' })
    event.preventDefault()
  })

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    const error = handleError(event.error)
    logError(error, {
      type: 'uncaughterror',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    })
  })

  // Override console.error for better error tracking
  const originalConsoleError = console.error
  console.error = (...args: any[]) => {
    const error = args.find(arg => arg instanceof Error)
    if (error) {
      logError(handleError(error), { originalArgs: args })
    }
    originalConsoleError.apply(console, args)
  }
}
