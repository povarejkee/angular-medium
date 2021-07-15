import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedStateService } from './services/state.service';
import { FeedApiService } from './services/api.service';

import { IGetFeedResponse } from './types/get-feed-response.interface';

@Injectable()
export class FeedFacadeService {
  constructor(private state: FeedStateService, private api: FeedApiService) {}

  getFeedByAPI(apiURL: string): void {
    this.state.setIsLoading(true);

    this.api.getFeed(apiURL).subscribe({
      next: (feed: IGetFeedResponse) => {
        this.state.setIsLoading(false);
        this.state.setFeed(feed);
      },
      // todo failure feed response
    });
  }

  // STATE SIGNALS:
  getIsLoading$(): Observable<boolean> {
    return this.state.getIsLoading$();
  }

  getFeed$(): Observable<IGetFeedResponse | null> {
    return this.state.getFeed$();
  }
}
