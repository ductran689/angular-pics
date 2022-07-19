import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    LoginFormComponent,
    SignupComponent,
    GalleriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
