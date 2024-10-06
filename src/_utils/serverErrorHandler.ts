export function serverErrorHandler(e: unknown, message = 'An error occurred') {
  console.error(message, e);
  return {
    message,
    error: e instanceof Error ? e.message : 'Unknown error',
  };
}
