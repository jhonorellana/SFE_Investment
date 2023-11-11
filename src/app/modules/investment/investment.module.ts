import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { SharedModule } from '@shared/shared.module';

import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    InvestmentPageComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    SharedModule
  ]
})
export class InvestmentModule { }


