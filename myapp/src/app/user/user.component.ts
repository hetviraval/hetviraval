import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[]; 

  userForm: FormGroup;

  constructor(private userService:UserService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
    this.userForm = this.buildUser(this.emptyUser());
    }
  // userForm = new FormGroup({
  //   id: new FormControl('',[Validators.required]),
  //   name: new FormControl('',[Validators.required]),
  //   lastname: new FormControl('',[Validators.required]),
  //   mobilenumber: new FormControl('',[Validators.required]),
  //   birthdate: new FormControl('',[Validators.required]),
  // });
  buildUser(data: User): FormGroup {
    return this._formBuilder.group({
      id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
    birthdate: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    hobbies:new FormControl('',[Validators.required])
    
    })
}
emptyUser(): User {
  return {
    id:null,
    name: null,
    lastname:null,
    mobilenumber:null,
    birthdate:null,
    city:null,
    gender:null,
    hobbies:null
  }
}
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  addUser() {
    let newUserData = this.userForm.value;
    console.log(newUserData);
    }
  add(users:User): void {
    this.userService.addUser(users)
      .subscribe(users => {
        this.users.push(users);
        console.log(users);
      });
  }
  delete(users: User): void {
    this.users = this.users.filter(h => h !== users);
    this.userService.deleteUser(users).subscribe();
  }
}
