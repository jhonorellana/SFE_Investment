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
  private readonly URL = environment.api2;
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {}
//    constructor(private httpClient: HttpClient) {}

    getAllMontlyAmortization$(): Observable<any>{
          console.log('Entré a consultar nuevamente -- >');
          console.log(`${this.URL}amortization`);
          return this.httpClient.get(`${this.URL}amortization`);
    }

    getMonthlyDataForCurrentMonth$(currentMonth: string ): Observable<any> {
      console.log('Dentro de la funcion esta -->',currentMonth);
      return this.getAllMontlyAmortization$().pipe(
        map((data: any[]) => {
          console.log('Data from service:', data);
          return data.filter((item) => item.month === 'Diciembre');
        })
      );
    }



}
















