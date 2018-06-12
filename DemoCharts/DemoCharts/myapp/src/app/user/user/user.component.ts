import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  userForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required]),
    LastName: new FormControl('',[Validators.required]),
    MobileNumber: new FormControl('',[Validators.required]),
    City: new FormControl('',[Validators.required]),
  
  
});

}
