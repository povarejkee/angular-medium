import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'am-error-message',
  template: '<div>{{ messageProp }}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  @Input('message') messageProp: string = 'Something went wrong';
}
