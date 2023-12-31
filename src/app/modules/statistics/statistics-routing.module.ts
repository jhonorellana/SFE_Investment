import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsPageComponent,
    outlet:'child'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
