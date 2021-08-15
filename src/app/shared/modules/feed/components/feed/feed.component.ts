import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { FeedFacadeService } from '../../facade.service';

import { IGetFeedResponse } from '../../types/get-feed-response.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

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

  feedURL: string;
  currentPage: number;
  limit: number = environment.paginationLimit;

  constructor(
    private facade: FeedFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.facade.getFeedByAPI(this.apiURL);

    this.initializeState();
    this.initializeValues();
  }

  private initializeState(): void {
    this.isLoading$ = this.facade.getIsLoading$();
    this.feed$ = this.facade.getFeed$();
    this.error$ = this.facade.getError$();
  }

  private initializeValues(): void {
    this.feedURL = this.router.url.split('?')[0];

    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1');
    });
  }
}
