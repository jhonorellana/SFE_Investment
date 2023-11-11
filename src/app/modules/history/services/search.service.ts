import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }


  SearchYearlyAmortization$(term: string): Observable<any>{
    return this.http.get(`${this.URL}?year=${term}`);

  }



  getAllMontlyAmortization$(): Observable<any>{
    console.log('Entré a consultar nuevamente');
    return this.http.get(`${this.URL}`);
}

  getMonthlyDataForCurrentMonth$(currentYear: string ): Observable<any> {
  console.log('Dentro de la funcion esta -->',currentYear);
  return this.getAllMontlyAmortization$().pipe(
    map((data: any[]) => {
      console.log('Data from service:', data);
      return data.filter((item) => item.year === currentYear);
    })
  );
  }




}
