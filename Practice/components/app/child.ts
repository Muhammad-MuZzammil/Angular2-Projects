import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    templateUrl:'components/app/child.html',
    // inputs:['name']

})
export class ComponentNameComponent implements OnInit {
    myValue:string;
    constructor() { }

    ngOnInit() { 
        
                // this.myValue = "zia"
        // console.log(this.myValue,'myValue');

    }

}