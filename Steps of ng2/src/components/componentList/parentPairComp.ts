import { Component } from '@angular/core';
import { childPairComp } from './childPairComp';
import { pairClass } from './pairClass';


@Component({
    selector: 'parent-pair',
    template: `
            <h2>Parent Component List</h2>
            <child-pair *ngFor="let pair of pairs" [nameValue]="pair"></child-pair>  
    `,
    directives:[childPairComp]
})
export class ParentPairCompo {
pairs:pairClass[];
    constructor() {
        this.pairs=[
            new pairClass("saad",12),
            new pairClass("MuZz",15)
            
        ]
     }


}