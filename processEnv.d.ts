declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_AUTH_CLIENT_ID: string;
    GOOGLE_AUTH_SECRET_KEY: string;
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
  }
}
