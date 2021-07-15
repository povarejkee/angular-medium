import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IGetFeedResponse } from '../types/get-feed-response.interface';

@Injectable()
export class FeedStateService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private feed$: BehaviorSubject<IGetFeedResponse | null> =
    new BehaviorSubject<IGetFeedResponse | null>(null);

  getIsLoading$(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setIsLoading(flag: boolean): void {
    this.isLoading$.next(flag);
  }

  getFeed$(): Observable<IGetFeedResponse | null> {
    return this.feed$.asObservable();
  }

  setFeed(feed: IGetFeedResponse): void {
    this.feed$.next(feed);
  }
}
