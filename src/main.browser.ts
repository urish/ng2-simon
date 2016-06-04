import 'angular2-universal/polyfills';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide, PLATFORM_DIRECTIVES} from '@angular/core';

import {App, APP_PROVIDERS} from './app';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

if ('production' === ENV) {
  enableProdMode();
}

export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    provide(PLATFORM_DIRECTIVES, { useValue: MD_TOOLBAR_DIRECTIVES, multi: true }),
    ...APP_PROVIDERS
  ])
    .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());
