import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: { title: 'Employee List' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only,
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
