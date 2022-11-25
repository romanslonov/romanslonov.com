declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IP_SALT: string;
      SITE_URL: string;
      DATABASE_URL: string;
    }
  }
}

export {};
