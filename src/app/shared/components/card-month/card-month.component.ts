import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-month',
  templateUrl: './card-month.component.html',
  styleUrls: ['./card-month.component.css']
})
export class CardMonthComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small'
  @Input() amortization: MonthlyamortizationModel = { year: '2000', month: '', capital: '', interest: '', total: '' };

  ngOnInit(): void {
  }
}


