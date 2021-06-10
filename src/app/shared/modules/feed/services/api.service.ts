import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IGetFeedResponse } from '../types/get-feed-response.interface';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class FeedApiService {
  constructor(private http: HttpClient) {}

  getFeed(customUrl: string): Observable<IGetFeedResponse> {
    const URL: string = environment.apiUrl + customUrl;

    return this.http.get<IGetFeedResponse>(URL);
  }
}
