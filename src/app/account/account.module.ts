import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage
  ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
    ]
})
export class AccountModule { }
