import { Component } from '@angular/core';

@Component({
    selector: 'binding_properties',
    templateUrl: 'components/binding_properties/binding_properties.html'
})
export class bindPropComponent  {
    name:string;
    constructor() { 
        this.name = "Muzzammil"
    }


}