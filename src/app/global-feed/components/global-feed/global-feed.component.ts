import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent implements OnInit {
  apiURL: string = '/articles';

  constructor() {}

  ngOnInit(): void {}
}
