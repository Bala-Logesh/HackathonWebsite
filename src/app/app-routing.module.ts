import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideoComponent } from './components/video/video.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DigibankComponent } from './components/digibank/digibank.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: 'digibank', component: DigibankComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'video', component: VideoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms/:form_no', component: FormsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }

export const COMPONENTS = [
  HomeComponent,
  ContactComponent,
  VideoComponent,
  FaqComponent,
  LoginComponent,
  RegisterComponent,
  DigibankComponent,
  FormsComponent
];