import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { StateService } from './services/state.service';
import { ApiService } from './services/api.service';

import { IRegisterRequest } from './types/register-request.interface';
import { ICurrentUser } from './types/current-user.interface';
import { IBackendErrors } from './types/backend-errors';

@Injectable()
export class FacadeService {
  constructor(private state: StateService, private api: ApiService) {}

  register(data: IRegisterRequest): void {
    this.state.setIsSubmitting(true);

    this.api.register(data).subscribe({
      next: (result: ICurrentUser) => {
        this.state.setIsSubmitting(false);
        this.state.setCurrentUser(result);
        this.state.setIsLoggedIn(true);
        this.state.setBackendErrors(null);
      },

      error: (errorResponse: HttpErrorResponse) => {
        this.state.setIsSubmitting(false);
        this.state.setBackendErrors(errorResponse.error.errors);
      },
    });
  }

  getIsSubmitting(): Observable<boolean> {
    return this.state.getIsSubmitting();
  }

  getBackendErrors(): Observable<IBackendErrors | null> {
    return this.state.getBackendErrors();
  }
}