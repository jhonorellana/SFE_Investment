import { SearchService } from './../../services/search.service';
import { Component, OnInit, numberAttribute} from '@angular/core';
//import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';
//import { InvestmentService } from '../../../investment/services/investment.service';
import { Subscription, Observable, of } from 'rxjs';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit{
  MonthlyamortizationList$: Observable<any> = of([])
  DailyamortizationList$: Observable<any> = of([])
  MesActual: string ="";
  AnioActual: string ="";
  FechaActual = new Date();

  constructor(private searchService: SearchService){}

  listObservers$: Array<Subscription>=[]

  ngOnInit(): void{

    this.MesActual = (this.FechaActual.getMonth() + 1).toString();
    this.AnioActual = (this.FechaActual.getFullYear()).toString();

    this.MonthlyamortizationList$ = this.searchService.SearchYearlyAmortization$(this.AnioActual)
    this.DailyamortizationList$ = this.searchService.SearchMonthlyAmortization$(this.AnioActual,this.MesActual)

  }

    recibeData(datoCambiado: string[]):void {
    console.log('Recibe data padre -->',datoCambiado)
//    recibeData(anio: string, mes: string):void {
    this.MonthlyamortizationList$ = this.searchService.SearchYearlyAmortization$(datoCambiado[0])
    this.DailyamortizationList$ = this.searchService.SearchMonthlyAmortization$(datoCambiado[0],datoCambiado[1])
  }


}


