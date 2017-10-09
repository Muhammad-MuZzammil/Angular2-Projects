import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl:'components/app/app.component.html'
})
export class AppComponent {
    // num: number;
    name: string;


    constructor() {
        this.name="MuZz"
        // this.num++

    }

    clicked(name){
        console.log(name.value);
    }

}
