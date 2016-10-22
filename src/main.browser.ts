import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app';

import { SynthService } from './app/shared/synth.service';
import { FirebasePrefix } from './app/model/tokens';
import { WebSynthService } from './app/web/web-synth.service';

const APP_PROVIDERS = [
  { provide: SynthService, useClass: WebSynthService },
  { provide: FirebasePrefix, useValue: '/web' }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(APP_PROVIDERS).bootstrapModule(AppModule);
