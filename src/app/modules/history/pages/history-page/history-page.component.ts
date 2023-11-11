import { SearchService } from './../../services/search.service';
import { Component, OnInit} from '@angular/core';
import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';
import { InvestmentService } from '../../../investment/services/investment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit{
  MonthlyamortizationList: Array<MonthlyamortizationModel> = []
  FutureMontlyamortizationList: Array<MonthlyamortizationModel> = []

  constructor(private investmentService: InvestmentService){}

  listObservers$: Array<Subscription>=[]

  ngOnInit(): void{
    this.investmentService.getMonthlyDataForCurrentMonth$('Noviembre')
          .subscribe((response: MonthlyamortizationModel[]) => {
                        this.MonthlyamortizationList = response
                      }, err => {console.log('Error de conexion');}
                    )

  }

  receiveData(event: string):void {
    console.log('✌🤷‍♂️🤷‍♂️🤷‍♀️🤷‍♀️ estoy en el padre jaja', event);
    this.investmentService.getMonthlyDataForCurrentMonth$(event)


  }


}


