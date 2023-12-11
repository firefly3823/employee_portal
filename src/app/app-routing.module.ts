import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// users
const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
// route path
{
  path:'',component:LoginComponent
},
// dashboard
{
  path:'dashboard',component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
