import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './user/dashboard.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [

  { 
    path: '',     component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'temp', component: AdminComponent }
     ]
  },
  { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', component: SigninComponent },
        { path: 'signin', component: SigninComponent},
        { path: 'signup', component: SignupComponent}
      ]
  },
  
  { path: 'admin', component: AdminComponent},
  { path: 'cart', component: CartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
