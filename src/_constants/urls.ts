export const APP_DOMAIN = process.env.NODE_ENV === 'production' ? 'https://TODO.coala.kr' : 'http://127.0.0.1:3000';

export const GOOGLE_AUTH_LOGIN_URL = `${APP_DOMAIN}/api/auth/login-url`;
export const GOOGLE_AUTH_LOGIN_SUCCESS_URL = `${APP_DOMAIN}/api/auth/login-success`;
