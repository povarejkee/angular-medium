import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICurrentUser } from '../types/current-user.interface';
import { IBackendErrors } from '../types/backend-errors.interface';

@Injectable()
export class AuthStateService {
  private isSubmitting$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private currentUser$: BehaviorSubject<ICurrentUser | null> =
    new BehaviorSubject<ICurrentUser | null>(null);

  private isLoggedIn$: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);

  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private backendErrors$: BehaviorSubject<string[] | null> =
    new BehaviorSubject<string[] | null>(null);

  getIsSubmitting$(): Observable<boolean> {
    return this.isSubmitting$.asObservable();
  }

  setIsSubmitting(flag: boolean): void {
    this.isSubmitting$.next(flag);
  }

  getCurrentUser$(): Observable<ICurrentUser | null> {
    return this.currentUser$.asObservable();
  }

  setCurrentUser(currentUser: ICurrentUser | null): void {
    this.currentUser$.next(currentUser);
  }

  getIsLoggedIn$(): Observable<boolean | null> {
    return this.isLoggedIn$.asObservable();
  }

  setIsLoggedIn(flag: boolean | null): void {
    this.isLoggedIn$.next(flag);
  }

  getIsLoading$(): Observable<boolean | null> {
    return this.isLoggedIn$.asObservable();
  }

  setIsLoading(flag: boolean): void {
    this.isLoading$.next(flag);
  }

  getBackendErrors$(): Observable<string[] | null> {
    return this.backendErrors$.asObservable();
  }

  setBackendErrors(errors: string[] | null): void {
    this.backendErrors$.next(errors);
  }
}
