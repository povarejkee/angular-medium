import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
