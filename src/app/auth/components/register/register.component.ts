import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FacadeService } from '../../facade.service';

import { IRegisterRequest } from '../../types/register-request.interface';
import { IBackendErrors } from '../../types/backend-errors';

@Component({
  selector: 'am-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private facade: FacadeService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeState();
  }

  onSubmit(): void {
    const data: IRegisterRequest = { user: this.form.value };

    this.facade.register(data);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  private initializeState(): void {
    this.isSubmitting$ = this.facade.getIsSubmitting();
    this.backendErrors$ = this.facade.getBackendErrors();
  }
}
