import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IRegisterRequest } from '../types/register-request.interface';
import { IRegisterResponse } from '../types/register-response.interface';
import { ICurrentUser } from '../types/current-user.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const URL: string = `${environment.apiUrl}/users`;

    return this.http
      .post<IRegisterResponse>(URL, data)
      .pipe(map((response: IRegisterResponse) => response.user));
  }
}
