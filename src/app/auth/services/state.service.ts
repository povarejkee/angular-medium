import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICurrentUser } from '../types/current-user.interface';
import { IBackendErrors } from '../types/backend-errors';

@Injectable()
export class StateService {
  private isSubmitting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private currentUser: BehaviorSubject<ICurrentUser | null> =
    new BehaviorSubject<ICurrentUser | null>(null);

  private isLoggedIn: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);

  private backendErrors: BehaviorSubject<IBackendErrors | null> =
    new BehaviorSubject<IBackendErrors | null>(null);

  getIsSubmitting(): Observable<boolean> {
    return this.isSubmitting.asObservable();
  }

  setIsSubmitting(flag: boolean): void {
    this.isSubmitting.next(flag);
  }

  getCurrentUser(): Observable<ICurrentUser | null> {
    return this.currentUser.asObservable();
  }

  setCurrentUser(currentUser: ICurrentUser | null): void {
    this.currentUser.next(currentUser);
  }

  getIsLoggedIn(): Observable<boolean | null> {
    return this.isLoggedIn.asObservable();
  }

  setIsLoggedIn(flag: boolean | null): void {
    this.isLoggedIn.next(flag);
  }

  getBackendErrors(): Observable<IBackendErrors | null> {
    return this.backendErrors.asObservable();
  }

  setBackendErrors(errors: IBackendErrors | null): void {
    this.backendErrors.next(errors);
  }
}
