import { Component } from '@angular/core';

@Component({
    selector: 'events',
    templateUrl: 'components/events/events.html'
})
export class EventComponent  {

    counter:number;

    constructor() {

        this.counter=0;
     }

addCount(){
this.counter++;
}

}