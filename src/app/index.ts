import { SynthService } from './shared/synth.service';
import { WebSynthService } from './web/web-synth.service';
import { FirebasePrefix } from './model/tokens';

export * from './app.module';

export const APP_PROVIDERS = [
  { provide: SynthService, useClass: WebSynthService },
  { provide: FirebasePrefix, useValue: '/web' }
];
