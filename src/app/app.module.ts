import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgbModule, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { MainComponent, ErrorComponent, FooterComponent, NavbarComponent } from './layouts';
import {SharedModule} from './shared';
import {LoginModule} from './login/login.module';
import * as moment from 'moment';
import {EntityModule} from './entities/entity.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    MainComponent,
    ErrorComponent,
    FooterComponent,
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot({ prefix: 'ldl', separator: '-' }),
    SharedModule.forRoot(),
    HomeModule,
    LoginModule,
    EntityModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor(private dpConfig: NgbDatepickerConfig) {
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}
