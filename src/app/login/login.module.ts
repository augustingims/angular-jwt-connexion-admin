import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { loginRoute, LoginComponent } from './';
import {SharedModule} from '../shared';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([loginRoute])],
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}
