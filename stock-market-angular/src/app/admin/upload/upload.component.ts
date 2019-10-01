import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  addExcel : FormGroup  ;
  submitted = false;
  

  constructor(private _location: Location,private formBuilder: FormBuilder) {
    this.addExcel = this.formBuilder.group({
      
      fileName: ['',[Validators.required]]
      });
       
    
  }
  onSubmit(){
   
    this.submitted = true;
    if (this.addExcel.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addExcel.value))
 

  }
  backClicked() {
    this._location.back();
  }

}
