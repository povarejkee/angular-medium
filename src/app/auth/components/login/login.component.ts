import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FacadeService } from '../../facade.service';

import { ILoginRequest } from '../../types/login-request.interface';

@Component({
  selector: 'am-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<string[] | null>;

  constructor(private fb: FormBuilder, private facade: FacadeService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeState();
  }

  onSubmit(): void {
    const data: ILoginRequest = { user: this.form.value };

    this.facade.login(data);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: '',
    });
  }

  private initializeState(): void {
    this.isSubmitting$ = this.facade.getIsSubmitting$();
    this.backendErrors$ = this.facade.getBackendErrors$();
  }
}
