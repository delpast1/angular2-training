import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SeconedCompComponent } from './seconed-comp/seconed-comp.component';
import { SixthCompComponent } from './sixth-comp/sixth-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { FourthCompComponent } from './fourth-comp/fourth-comp.component';
import { FifthCompComponent } from './fifth-comp/fifth-comp.component';
import { SeventhCompComponent } from './seventh-comp/seventh-comp.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SeconedCompComponent,
    SixthCompComponent,
    ThirdCompComponent,
    FourthCompComponent,
    FifthCompComponent,
    SeventhCompComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
