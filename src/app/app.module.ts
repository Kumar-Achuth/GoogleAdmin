import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { LoginDashboardComponent } from './component/login-dashboard/login-dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { QuestionAdminComponent } from './component/question-admin/question-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginDashboardComponent,
    QuestionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
