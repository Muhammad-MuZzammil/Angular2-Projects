import { Component } from '@angular/core'


@Component({
    selector: 'arrays',
    templateUrl: 'components/arrays/arrays.html'

})

export class ArrComponent {
    names: any[] = [];
    choice: number;
    constructor() {
        this.names = ['MuZz', 'saad', 'Yousuf', 'Aamir']
        this.choice=0;
    }

    nextChoice() {
         this.choice++;
    }
}