import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IBackendErrors } from '../../../../../auth/types/backend-errors.interface';

@Component({
  selector: 'am-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorsComponent {
  @Input() backendErrors: string[];
}
