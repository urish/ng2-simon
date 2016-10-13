import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule, APP_PROVIDERS } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(APP_PROVIDERS).bootstrapModule(AppModule);
