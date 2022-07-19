import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
