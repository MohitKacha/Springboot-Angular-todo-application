import { RouteGuardService } from './services/route-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { ErrorComponent } from './components/error/error.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'login', component:LoginComponent},
  {path : 'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path : 'todos',component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path : 'logout',component:LogoutComponent},
  {path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
