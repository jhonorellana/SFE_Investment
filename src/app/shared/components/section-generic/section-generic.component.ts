import { Component,Input,OnInit } from '@angular/core';
import { MonthlyamortizationModel } from '@core/models/monthlyamortization.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataMonhtlyamortization: Array<MonthlyamortizationModel> = []

  constructor() { }

  ngOnInit(): void {
  }
}
