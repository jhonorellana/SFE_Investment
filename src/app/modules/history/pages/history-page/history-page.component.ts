import { SearchService } from './../../services/search.service';
import { Component, OnInit} from '@angular/core';
import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';
//import { InvestmentService } from '../../../investment/services/investment.service';
import { Subscription, Observable, of } from 'rxjs';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit{
  MonthlyamortizationList$: Observable<any> = of([])
  MonthlyamortizationList: MonthlyamortizationModel[] = [];
  FutureMontlyamortizationList: Array<MonthlyamortizationModel> = []

//  constructor(private investmentService: InvestmentService){}
  constructor(private searchService: SearchService){}

  listObservers$: Array<Subscription>=[]

  ngOnInit(): void{
    this.searchService.SearchYearlyAmortization$('2022')
          .subscribe((response: MonthlyamortizationModel[]) => {
                        this.MonthlyamortizationList = response
                      }, err => {console.log('Error de conexion');}
                    )

  }

  receiveData(event: string):void {
    console.log('✌ Padre: has digitado --> ', event);
    this.MonthlyamortizationList$ = this.searchService.SearchYearlyAmortization$(event)
    //.subscribe((data) => {this.MonthlyamortizationList$ = data;});


  }


}


