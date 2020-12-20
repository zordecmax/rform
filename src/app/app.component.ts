import { Component, NgModule } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 records = [];
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }
  onSubmit() {
    this.records.push(this.userForm.value);
    // console.log(this.userForm.value);
  }
}
