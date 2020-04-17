import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageKillsComponent } from './components/average-kills/average-kills.component';


const routes: Routes = [
  {path: '', component: AverageKillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
