import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthStateService } from './services/state.service';
import { AuthApiService } from './services/api.service';
import { AuthCoreService } from './services/core.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

import { IRegisterRequest } from './types/register-request.interface';
import { ILoginRequest } from './types/login-request.interface';
import { ICurrentUser } from './types/current-user.interface';

@Injectable()
export class AuthFacadeService {
  constructor(
    private state: AuthStateService,
    private api: AuthApiService,
    private core: AuthCoreService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  register(data: IRegisterRequest): void {
    this.state.setIsSubmitting(true);

    this.api.register(data).subscribe({
      next: this.authSuccessActions.bind(this),
      error: this.authFailureActions.bind(this),
    });
  }

  login(data: ILoginRequest): void {
    this.state.setIsSubmitting(true);

    this.api.login(data).subscribe({
      next: this.authSuccessActions.bind(this),
      error: this.authFailureActions.bind(this),
    });
  }

  getCurrentUserByAPI(): void {
    const token: string = this.localStorage.get('accessToken');

    if (token) {
      this.state.setIsLoading(true);

      this.api.getCurrentUser().subscribe({
        next: (result: ICurrentUser) => {
          this.state.setIsLoading(false);
          this.state.setIsLoggedIn(true);
          this.state.setCurrentUser(result);
        },

        error: (errorResponse: HttpErrorResponse) => {
          // todo возможно, придется создать функцию, чтобы не повторяться ТУТ и в else ниже
          this.state.setIsLoading(false);
          this.state.setIsLoggedIn(false);
          this.state.setCurrentUser(null);
        },
      });
    } else {
      this.state.setIsLoading(false);
      this.state.setIsLoggedIn(false);
      this.state.setCurrentUser(null);
    }
  }

  private authSuccessActions(result: ICurrentUser): void {
    this.state.setIsSubmitting(false);
    this.state.setCurrentUser(result);
    this.state.setIsLoggedIn(true);
    this.state.setBackendErrors(null);

    this.localStorage.set('accessToken', result.token);

    this.router.navigateByUrl('/');
  }

  private authFailureActions(errorResponse: HttpErrorResponse): void {
    const transformedErrors: string[] = this.core.transformBackendErrorsForView(
      errorResponse.error.errors
    );

    this.state.setIsSubmitting(false);
    this.state.setBackendErrors(transformedErrors);
  }

  // STATE SIGNALS:
  getIsSubmitting$(): Observable<boolean> {
    return this.state.getIsSubmitting$();
  }

  getBackendErrors$(): Observable<string[] | null> {
    return this.state.getBackendErrors$();
  }

  getCurrentUser$(): Observable<ICurrentUser | null> {
    return this.state.getCurrentUser$();
  }

  getIsLoggedIn$(): Observable<boolean | null> {
    return this.state.getIsLoggedIn$();
  }
}
