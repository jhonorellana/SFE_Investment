import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {}
//    constructor(private httpClient: HttpClient) {}

    getAllMontlyAmortization$(): Observable<any>{
          return this.httpClient.get(`${this.URL}`);
    }

    getMonthlyDataForCurrentMonth$(_month: string ): Observable<any> {
      return this.getAllMontlyAmortization$().pipe(
        map((data: any[]) => {
          const currentMonth = _month; //this.datePipe.transform(new Date(), 'MMMM');
          console.log(currentMonth)
          return data.filter((item) => item.month === currentMonth);
        })
      );
    }



}
















