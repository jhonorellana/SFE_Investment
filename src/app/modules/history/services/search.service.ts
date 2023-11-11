import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }


  SearchMonthlyAmortization$(term: string): Observable<any>{
    return this.http.get(`{this.URL}?src=${term}`)

  }
}
