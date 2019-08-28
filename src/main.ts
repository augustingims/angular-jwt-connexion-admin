import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {ProdConfig} from './app/blocks/config/prod.config';

ProdConfig();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true })
  .then(success => console.log(`Application started`))
  .catch(err => console.error(err));
