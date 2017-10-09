import { Component, OnInit } from '@angular/core';
import { Dish } from './handi-model';
import {  Router  } from '@angular/router';

import {  FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-handi',
    templateUrl: './handi.component.html',
    styleUrls: ['./handi.component.css']
})
export class HandiComponent implements OnInit {
    myForm: FormGroup;
    // dish: Dish;
    imgUrl = ""
    // dishName = '';
    // dishQuantity = ''
    // dishPrice = ''
    active = false;
    constructor(private fb: FormBuilder,private router:Router) {

        this.myForm = fb.group({
            'dishName': [''],
            'dishQuantity': [''],
            'dishPrice': [''],
            'dishImage': ['']

        })

    }
    ngOnInit() {

    }




    dishList: Dish[] = [
        // dishImage: '../../assets/img/6.jpg',
        // { dishName: 'Chicken Karahi', dishPrice: 550, dishQuantity: 'full' },
    ];


    addDish() {
        // this.router.navigate(['/signin'])

        this.active = true;
    }

    encodeImageFileAsURL() {
        var self = this;
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];

            var fileReader = new FileReader();

            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64

                var newImage = document.createElement('img');
                newImage.src = srcData;

                document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                console.log("newImage.src", newImage.src);
                self.imgUrl = newImage.src
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }


    onSubmit(dishForm) {
        dishForm.dishImage = this.imgUrl;
        let form = {
            'dishName': dishForm.dishName,
            'dishQuantity': dishForm.dishQuantity,
            'dishPrice': dishForm.dishPrice,
            'dishImage': dishForm.dishImage

        }
        // console.log('last', form);



        // console.log('dishForm', dishForm);
        this.dishList.push(dishForm);
        console.log('Arr', this.dishList);
        this.active = false;
        


    }

}