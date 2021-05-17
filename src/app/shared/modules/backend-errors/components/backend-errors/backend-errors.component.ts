import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IBackendErrors } from '../../../../../auth/types/backend-errors';

@Component({
  selector: 'am-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorsComponent {
  // todo сделать это в core.service
  @Input() set backendErrors(value: IBackendErrors) {
    this.backendErrorMessages = Object.keys(value).map((key: string) => {
      const messages: string = value[key].join(', ');

      return `${key} ${messages}`;
    });
  }

  backendErrorMessages: string[];
}
