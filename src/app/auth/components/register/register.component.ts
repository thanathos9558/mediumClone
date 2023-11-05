import { Component } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { register } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
import { selectIsSubmitting } from "../../store/reducers";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
//import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule]
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>,
    //private authService: AuthService
  ) { }

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({ request }))
    // this.authService
    //   .register(request)
    //   .subscribe(res => console.log('response', res))
  }
}
