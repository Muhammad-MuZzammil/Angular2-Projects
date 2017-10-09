import { Component } from '@angular/core';

@Component({
    selector: 'multipleSteps',
    template:`
        <div [style.background-color]="'yellow'" [style.font-size.px]="fontSize">
                Uses fixed yellow background with dynamic font size 
        </div>

        <button (click)="increaseFontSize()">Increase Font Size</button>
    `
})
export class multipleComponent   {

    fontSize:number;

    constructor() {
        this.fontSize=12;
     }
increaseFontSize(){
        return this.fontSize++;
    
}

}