import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { FeedFacadeService } from '../../facade.service';

import { IGetFeedResponse } from '../../types/get-feed-response.interface';

@Component({
  selector: 'am-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  @Input() apiURL: string;

  isLoading$: Observable<boolean>;
  feed$: Observable<IGetFeedResponse | null>;
  error$: Observable<any>; // todo пока не ясно какой будет тип

  constructor(private facade: FeedFacadeService) {}

  ngOnInit(): void {
    this.facade.getFeedByAPI(this.apiURL);

    this.isLoading$ = this.facade.getIsLoading$();
    this.feed$ = this.facade.getFeed$();
    this.error$ = this.facade.getError$();
  }
}
