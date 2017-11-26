import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';


@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path:'product1',
                component:Product1Component
            },
            {
                path:'product2',
                component:Product2Component
            }
        ])
    ],
    declarations:[
    Product2Component,
    Product1Component
    ],
    providers:[

    ]
})

export class ProductModule{}