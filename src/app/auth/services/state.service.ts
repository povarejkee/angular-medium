import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StateService {
  private isSubmitting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getIsSubmitting(): Observable<boolean> {
    return this.isSubmitting.asObservable();
  }

  setIsSubmitting(flag: boolean): void {
    this.isSubmitting.next(flag);
  }
}
