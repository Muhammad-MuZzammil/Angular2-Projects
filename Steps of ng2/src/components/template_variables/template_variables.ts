import { Component } from '@angular/core';

@Component({
    selector: 'template_variables',
    templateUrl: 'components/template_variables/template_variables.html'
})
export class tempVarComponent {
    name: string;
    show: boolean = false;

    constructor() {

        this.name = 'Muzzammil';
    }
    
    showMsg() {
        this.show = true;
    }

    hideMsg() {
        this.show = false;

    }

}