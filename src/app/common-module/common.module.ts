import { NgModule } from '@angular/core';
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { PaginationComponent } from "./paginationComponent/pagination.component";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';


//import { CustomRouteReuseStrategy } from "./router-reuse/router-reuse";
@NgModule({
  declarations: [
    PaginationComponent//,
    // DeleteAlertComponent,       
    // MultiselectcontrolComponent,
    // StarRatingComponent,
    // StarRatingnewComponent,
    // FileUploadComponent,   
    // typeheadComponent,
    // SimpleTinyComponent
      
  ],
  imports: [CommonModule, 
    FormsModule,ReactiveFormsModule
    
  ],
   exports: [PaginationComponent//,
    //          DeleteAlertComponent,
    //  MultiselectcontrolComponent,
    //  StarRatingComponent,
    //  StarRatingnewComponent,
    //  FileUploadComponent,
    
    //  typeheadComponent,
    //  SimpleTinyComponent,
    
    ],   
   entryComponents: [     
    //  StarRatingComponent,
    //  StarRatingnewComponent,
    //  SimpleTinyComponent
  ],
})
export class CommonAllModule { }
