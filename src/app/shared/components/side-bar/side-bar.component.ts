import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []


  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Vencimientos',
        icon: 'uil uil-calendar-alt',
        router: ['/', 'history'],
      },
      {
        name: 'Inversiones',
        icon: 'uil uil-analytics',
        router: ['/', 'investment'],
      },
      {
        name: 'Balance',
        icon: 'uil uil-balance-scale',
        router: ['/', 'history'],
      },
      {
        name: 'Portafolio',
        icon: 'uil uil-bag',
        router: ['/', 'statistics'],
      },
      {
        name: 'Acciones',
        icon: 'uil uil-chart-line',
        router: ['/', 'shares'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Actualizar capital',
        icon: 'uil-plus-square',
      },
      {
        name: 'Estadísticas',
        icon: 'uil uil-analysis',
        router: ['/', 'statistics'],
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]



  }
}
