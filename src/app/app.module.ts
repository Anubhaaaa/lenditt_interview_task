import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './typefilter.pipe';
import { DatefilterPipe } from './datefilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchfilterPipe,
    TypefilterPipe,
    DatefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
