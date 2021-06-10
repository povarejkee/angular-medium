import { Injectable } from '@angular/core';

import { IBackendErrors } from '../types/backend-errors.interface';

@Injectable()
export class AuthCoreService {
  transformBackendErrorsForView(errors: IBackendErrors): string[] {
    return Object.keys(errors).map((key: string) => {
      const messages: string = errors[key].join(', ');

      return `${key} ${messages}`;
    });
  }
}
