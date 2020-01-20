import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {SecureInnerPagesGuard} from "../guards/secure-inner-pages.guard";
import {AuthGuard} from "../guards/auth.guard";
import {CalendarComponent} from "../../components/menu/calendar/calendar.component";
import {EmployeesComponent} from "../../components/menu/employees/employees.component";
import {ProfileComponent} from "../../components/menu/profile/profile.component";
import {MenuComponent} from "../../components/menu/menu.component";



const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
      {path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard]}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
