import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { SharesPageComponent } from './pages/shares-page/shares-page.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    SharesPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharesRoutingModule
  ]
})
export class SharesModule { }
