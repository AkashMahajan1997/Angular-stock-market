import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  updateUser : FormGroup  ;
  submitted = false;

  constructor(private _location: Location,private formBuilder: FormBuilder) {
  
  }

  ngOnInit() {
    this.updateUser = this.formBuilder.group({
        
      Username: ['',[Validators.required]],
      Password: ['',[Validators.required]],
      Repassword:['',[Validators.required]],
      Email:['',[Validators.required]],
      Mobile: ['',[Validators.required]],
      });
      
    }

    
  onSubmit(){
   
    this.submitted = true;
    if (this.updateUser.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateUser.value))
 

}  

}
