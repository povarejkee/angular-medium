import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'am-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
