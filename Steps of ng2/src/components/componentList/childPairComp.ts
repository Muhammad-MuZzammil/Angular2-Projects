import { Component, Input } from '@angular/core';
import { pairClass } from './pairCLass'
@Component({
    selector: 'child-pair',
    template: `
     <div>

         <span>{{nameValue.name}}</span>
         <span>{{nameValue.value}}</span>

     </div>
    `,

})
export class childPairComp {
    @Input()
    nameValue: pairClass
    
    constructor() { }

}