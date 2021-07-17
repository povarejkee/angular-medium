import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'am-loading',
  template: '<div>Loading...</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {}
