import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformModule } from '@angular/cdk/platform';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthGuardLoggedIn } from './guards/auth-logged-in.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsComponent } from './options/options.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SyncCalendarComponent } from './options/sync-calendar/sync-calendar.component';
import {MatCardModule} from '@angular/material/card';
import { FunctionalLoginComponent } from './login/functional-login/functional-login.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    OptionsComponent,
    SyncCalendarComponent,
    FunctionalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    PlatformModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard },
    { provide: AuthGuardLoggedIn, useClass: AuthGuardLoggedIn },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
