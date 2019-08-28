import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_ROUTE, HomeComponent } from './';
import {SharedModule} from '../shared';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
