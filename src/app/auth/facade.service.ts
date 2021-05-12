import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from './services/state.service';
import { ApiService } from './services/api.service';

import { IRegisterRequest } from './types/registerRequest.interface';
import { ICurrentUser } from './types/currentUser.interface';

@Injectable()
export class FacadeService {
  constructor(private state: StateService, private api: ApiService) {}

  register(data: IRegisterRequest): void {
    this.state.setIsSubmitting(true);

    this.api.register(data).subscribe({
      next: (result: ICurrentUser) => {
        console.log('Ответ:', result);
        this.state.setIsSubmitting(false);
      },

      error: () => {},
    });
  }

  getIsSubmitting(): Observable<boolean> {
    return this.state.getIsSubmitting();
  }
}
