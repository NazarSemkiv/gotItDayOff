import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


//app routing module
import {AppRoutingModule} from './shared/routing/app-routing.module';
//Firebase services + enviroment module
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
//app components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfileComponent } from './components/menu/profile/profile.component';
import { CalendarComponent } from './components/menu/calendar/calendar.component';
import { EmployeesComponent } from './components/menu/employees/employees.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { EmployeeComponent } from './components/menu/employees/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProfileComponent,
    CalendarComponent,
    EmployeesComponent,
    MenuComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
