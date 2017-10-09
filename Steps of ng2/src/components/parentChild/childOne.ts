import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-one',
    templateUrl: 'components/parentChild/childOne.html'


})
export class childComponent {
    @Input() name;

    constructor() {
        console.log(this.name, 'name')
        // this.myValue="saad"
    }


}