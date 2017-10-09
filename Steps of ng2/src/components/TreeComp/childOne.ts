
import { Component } from '@angular/core';
import { SubChildComponent } from './subChild'


@Component({
    selector: 'child-one',
	templateUrl: 'components/TreeComp/childOne.html',
    directives:[SubChildComponent]

})
export class childOneComponent   {
    constructor() { }


}