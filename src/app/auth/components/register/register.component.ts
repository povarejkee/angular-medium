import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FacadeService } from '../../facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting: Observable<boolean>;

  constructor(private fb: FormBuilder, private facade: FacadeService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeState();
  }

  onSubmit(): void {
    this.facade.register({ user: this.form.value }); // todo где лучше сделать эту трансформацию ???
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  private initializeState(): void {
    this.isSubmitting = this.facade.getIsSubmitting();
  }
}
