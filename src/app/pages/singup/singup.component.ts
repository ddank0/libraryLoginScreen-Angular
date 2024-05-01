import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';

interface SingupForm{
	name: FormControl,
	email: FormControl,
	password: FormControl,
	passwordConfirm: FormControl
}

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
	DefaultLoginLayoutComponent,
	ReactiveFormsModule,
	PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent {
	singupForm!: FormGroup<SingupForm>;

	constructor(
		private router: Router,
		private loginService: LoginService,
		private toastService: ToastrService
	){
		this.singupForm = new FormGroup({
			name: 	 	 new FormControl('', [Validators.required,Validators.minLength(3)]),
			email: 	 	 new FormControl('', [Validators.required, Validators.email]),
			password:	 new FormControl('', [Validators.required, Validators.minLength(6)]),
			passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
	}
	submit() {
		this.loginService.login(this.singupForm.value.email, this.singupForm.value.password).subscribe({
			next: () => this.toastService.success("Logado com sucesso"),
			error: () => this.toastService.error("Erro inesperado")
		})
	}
	navigate() {
		this.router.navigate(["/login"]);
	}

}
