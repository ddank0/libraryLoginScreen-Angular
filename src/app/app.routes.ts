import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

export const routes: Routes = [
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "singup",
		component: SingupComponent

	}
];
