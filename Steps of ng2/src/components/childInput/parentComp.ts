import { Component } from '@angular/core';
import { childOneComponent } from './childOne'

@Component({
    selector: 'parent',
    templateUrl: 'components/childInput/parentComp.html',
    directives:[childOneComponent]

})
export class parentCompo   {
    count:number=10;
    constructor() {
        setInterval(()=> this.count++,1000)
     }


}