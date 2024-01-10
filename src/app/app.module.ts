import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
 }

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule,
],
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  // provider used to create fake backend
  fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { };
