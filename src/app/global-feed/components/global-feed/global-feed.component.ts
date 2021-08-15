import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'am-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {
  apiURL: string = '/articles';
}
