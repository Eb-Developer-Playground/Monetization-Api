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
import {MatCardModule} from "@angular/material/card";
import { RouterModule } from '@angular/router';
import {LeftSidebarComponent} from "./auth/navigation/left-sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NavBarComponent } from './auth/nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { LeftNavComponent } from './auth/left-nav/left-nav.component';
import { RightNavComponent } from './auth/right-nav/right-nav.component';
import { SideBarComponent } from './auth/side-bar/side-bar.component';
import { MaterialModule } from './material.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
 }

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LeftSidebarComponent,
    NavBarComponent,
    LeftNavComponent,
    RightNavComponent,
    SideBarComponent
  ],
  imports: [
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      // Define your routes here for apis
    ]),
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
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
