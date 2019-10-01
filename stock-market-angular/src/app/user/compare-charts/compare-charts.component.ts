import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'compare-charts',
  templateUrl: './compare-charts.component.html',
  styleUrls: ['./compare-charts.component.css']
})
export class CompareChartsComponent implements OnInit {

  compare : FormGroup  ;
  submitted = false;
  

  
  constructor(private _location: Location,private formBuilder: FormBuilder) {
  
  }

  
   ngOnInit() {
 this.compare = this.formBuilder.group({
     
   companyName: ['',[Validators.required]],
   stockExchange: [null,[Validators.required]],
   sector: [null,[Validators.required]],
   });
   
 }
 

 changeStock(e) {
   this.compare.controls['stockExhange'].setValue(e.target.value, {
     onlySelf: true
   })
 }

 changeSector(e) {
   this.compare.controls['sector'].setValue(e.target.value, {
     onlySelf: true
   })
 } 
 onSubmit(){
  
   this.submitted = true;
   if (this.compare.invalid) {
     return;
 }
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value))


 }
 backClicked() {
   this._location.back();
 }
 
 
}
