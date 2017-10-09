import { Component } from '@angular/core';

import { ImageComponent } from './imageComp';


@Component({
    selector: 'reusableComp',
    directives:[ImageComponent],
    templateUrl: 'components/reusableComp/reusableComp.html'
})
export class ReusableComponent   {

    constructor() {

     }
pressed(event : MouseEvent){
 alert("Image has been clicked");
}

}