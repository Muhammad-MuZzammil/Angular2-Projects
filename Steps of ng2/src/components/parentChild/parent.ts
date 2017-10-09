import { Component } from '@angular/core';
import { childComponent } from './childOne'


@Component({
    selector: 'parent',
    templateUrl: 'components/parentChild/parent.html',
    directives: [childComponent],
})
export class parentChildComponent {

    myValue: string;
    constructor() {
        this.myValue = "MuZz"

    }


}