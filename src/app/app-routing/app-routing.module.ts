import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from '../component/login-admin/login-admin.component';
import { LoginDashboardComponent } from '../component/login-dashboard/login-dashboard.component';

const routes: Routes =[
                      { path : 'loginAdmin', component : LoginAdminComponent },
                      { path : 'loginDashboard', component : LoginDashboardComponent},
                      { path: '', redirectTo: 'loginAdmin', pathMatch: 'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
