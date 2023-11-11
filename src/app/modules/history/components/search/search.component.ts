import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() callbackData:EventEmitter<any> = new EventEmitter()

     src1: string = ''
     src2: string = ''

     constructor(){}

  ngOnInit(): void {

  }

  callSearch(term: string):void{
         if (term.length>2)
         {
          console.log('Emitiendo desde el Hijo .....👍😊❤',term);
          this.callbackData.emit(term)

         }

  }


}
