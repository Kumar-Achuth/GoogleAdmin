import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { LoginDashboardComponent } from './component/login-dashboard/login-dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
