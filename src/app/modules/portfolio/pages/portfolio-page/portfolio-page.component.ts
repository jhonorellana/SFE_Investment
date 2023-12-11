import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { InvestownernewModel } from '@core/models/investownernew.model';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(
    private portfolioService: PortfolioService,
   // private cdr: ChangeDetectorRef // Importa el ChangeDetectorRef
  ) {}

  dataInvestownernewlist: Array<InvestownernewModel> = [];
  dataPointChart: Array<InvestownernewModel> = [];

  chartOptions = {
    animationEnabled: true,
    title: {
      text: "capital por propietario"
    },
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: this.dataPointChart,
    }
    ]
  };

  ngOnInit(): void {
    this.portfolioService.getInvestOwner$()
      .subscribe(
        (response: InvestownernewModel[]) => {
          this.dataInvestownernewlist = response;
          console.log(this.dataInvestownernewlist);

          this.dataPointChart = this.dataInvestownernewlist.map(entry => ({
            y: entry.y,
            name: entry.name
          }));

          console.log(this.dataPointChart);
          // Detecta los cambios manualmente
         // this.cdr.detectChanges();
        },
        err => {
          console.log('Error de conexión');
        }
      );
  }
}
