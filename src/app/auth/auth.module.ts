import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BackendErrorsModule } from '../shared/modules/backend-errors/backend-errors.module';

import { FacadeService } from './facade.service';
import { ApiService } from './services/api.service';
import { StateService } from './services/state.service';
import { CoreService } from './services/core.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BackendErrorsModule,
  ],
  providers: [
    FacadeService,
    ApiService,
    StateService,
    CoreService,
    LocalStorageService,
  ],
})
export class AuthModule {}
