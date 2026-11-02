import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

// FIREBASE CONFIGURATION
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-ohNyAT0Zfa0mLUdkuEy8PMA4CtIdzHA",
  authDomain: "mdconstruction-a1d99.firebaseapp.com",
  projectId: "mdconstruction-a1d99",
  storageBucket: "mdconstruction-a1d99.firebasestorage.app",
  messagingSenderId: "687272792816",
  appId: "1:687272792816:web:a25f71d9ef7ea05bcf6835"
};

const app = initializeApp(firebaseConfig);