import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule }    from '@angular/common/http';
import { CommonAllModule } from "./common-module/common.module";
//import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonAllModule,
    AgGridModule.withComponents(
            [RedComponentComponent]
        )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
