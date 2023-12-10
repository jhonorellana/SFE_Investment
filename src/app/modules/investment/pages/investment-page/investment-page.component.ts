import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';
import { InvestmentService } from '../../services/investment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investment-page',
  templateUrl: './investment-page.component.html',
  styleUrls: ['./investment-page.component.css']
})
export class InvestmentPageComponent implements OnInit{
  MonthlyamortizationList: Array<MonthlyamortizationModel> = []
  FutureMontlyamortizationList: Array<MonthlyamortizationModel> = []

  constructor(private investmentService: InvestmentService){}

  listObservers$: Array<Subscription>=[]

  ngOnInit(): void{
    this.investmentService.getMonthlyDataForCurrentMonth$('Diciembre')
          .subscribe((response: MonthlyamortizationModel[]) => {
                        this.MonthlyamortizationList = response
                      }, err => {console.log('Error de conexion');}
                    )

  }

  ngOnDestroy(): void{

  }



}
