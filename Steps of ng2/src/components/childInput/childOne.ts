import { Component } from '@angular/core';

@Component({
    selector: 'child-One',
    templateUrl: 'components/childInput/childOne.html',
    inputs:['data'],
    host:{
        class:'row',
        "[style.color]":"backgroundColor()"
    }

})
export class childOneComponent   {
    data:string
    constructor() {
        this.data="MuZz"
     }
     backgroundColor():string{
         return "red";
     }


}