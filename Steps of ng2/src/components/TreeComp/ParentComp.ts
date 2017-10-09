import { Component } from '@angular/core';
import { childOneComponent } from './childOne'
import { childTwoComponent } from './childTwo'


@Component({
    selector: 'parent',
    templateUrl: 'components/TreeComp/ParentComp.html',
    directives:[childOneComponent,childTwoComponent]

})
export class parentComponent   {
    constructor() { }


}