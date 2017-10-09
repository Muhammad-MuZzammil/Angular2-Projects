import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
    selector: 'clickable-img',
    templateUrl: 'components/reusableComp/imageComp.html'
})
export class ImageComponent   {
 @Input() url:string;
 @Output() clicked = new EventEmitter<MouseEvent>();
    constructor() {

     }
clickPressed(event:MouseEvent){
    this.clicked.emit(event)
}

}