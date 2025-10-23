interface AppConfig {
  [appName: string]: {
    [env: string]: string;
  };
}

export const APP_URLS: AppConfig = {
  'dashboard': {
    // local: 'http://localhost:4200/src/main.single-spa.js',
    local:"https://mfe-nx-spa-dashboard-react.vercel.app/assets/main.single-spa.js"
    },
  'navbar': {
    local: 'http://localhost:4201/src/main.single-spa.js',
    },
};

export const getAppUrl = (appName: string): string => {
  const env = import.meta.env.VITE_ENV || 'local';
  if (!APP_URLS[appName]) {
    throw new Error(`Unknown microfrontend app name: ${appName}`);
  }
  if (!APP_URLS[appName][env]) {
    throw new Error(`No URL configured for env '${env}' and app '${appName}'`);
  }
  return APP_URLS[appName][env];
};
