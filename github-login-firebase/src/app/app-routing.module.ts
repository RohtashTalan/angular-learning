import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

import {AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


const routes: Routes = [
    {
      path: 'signin',
      component: SigninComponent,
      canActivate: [AngularFireAuthGuard],
      data: [redirectLoggedInToHome]
      
  },
    {
      path: 'sinup',
      component: HomeComponent,
  },
    {
      path: '',
      component: SignupComponent,
      canActivate: [AngularFireAuthGuard],
      data: [redirectUnauthorizedToLogin]
  },
    {
      path: '**',
      component: PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
