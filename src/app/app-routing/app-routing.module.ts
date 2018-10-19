import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from '../component/login-admin/login-admin.component';
import { LoginDashboardComponent } from '../component/login-dashboard/login-dashboard.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes =[
                      { path : 'loginAdmin', component : LoginAdminComponent, },
                      { path : 'loginDashboard', component : LoginDashboardComponent, canActivate: [AuthGuard]},
                      { path: '', component : LoginDashboardComponent, pathMatch: 'full', canActivate: 
                      [AuthGuard]}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
