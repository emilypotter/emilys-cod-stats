import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AverageKillsComponent } from './components/average-kills/average-kills.component';
import { LastTwentyComponent } from './components/last-twenty/last-twenty.component';


const routes: Routes = [
  {path: '', component: LastTwentyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
