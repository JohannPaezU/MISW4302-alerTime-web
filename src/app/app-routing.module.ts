import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuardLoggedIn } from './guards/auth-logged-in.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './options/home/home.component';
import { OptionsComponent } from './options/options.component';
import { SyncCalendarComponent } from './options/sync-calendar/sync-calendar.component';
import { AlarmsComponent } from './options/alarms/alarms.component';
import { ShareComponent } from './options/alarms/share/share.component';
import { FunctionalLoginComponent } from './login/functional-login/functional-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/alerTime',
    pathMatch: 'full',
  },  
  {
    path: 'alerTime',
    component: MainComponent,
    canActivate: [AuthGuardLoggedIn]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardLoggedIn]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLoggedIn]
  },
  {
    path: 'functional-login',
    component: FunctionalLoginComponent,
    canActivate: [AuthGuardLoggedIn]
  },
  { 
    path: 'options', component: OptionsComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'sync-calendar', component: SyncCalendarComponent },
      { path: 'alarms', component: AlarmsComponent },
      { path: 'alarms/share', component: ShareComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/alerTime',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
