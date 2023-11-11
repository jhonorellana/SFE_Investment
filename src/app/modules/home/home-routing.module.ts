import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/investment/investment.module').then(m => m.InvestmentModule)
  },
  {
    path: 'investment',
    loadChildren: () => import('@modules/investment/investment.module').then(m => m.InvestmentModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('@modules/statistics/statistics.module').then(m => m.StatisticsModule)
  },
  {
    path: 'monamortization',
    loadChildren: () => import('@modules/monamortization/monamortization.module').then(m => m.MonamortizationModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/investment'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }