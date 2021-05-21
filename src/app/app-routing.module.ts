import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterComponent } from './consulter/consulter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
  pathMatch:'full',
  component: DashboardComponent },
  { path: 'Dashboard',
  pathMatch:'full',
  component: DashboardComponent },
 { path: 'Consulter',
  pathMatch:'full',
  component: ConsulterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
