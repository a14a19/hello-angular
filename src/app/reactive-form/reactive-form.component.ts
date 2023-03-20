import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public registerForm!: FormGroup;
  allowedUserName = ['Admin', 'Staff']
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl('Name', [Validators.required, this.allowed.bind(this)]),
      'email': new FormControl("admin@admin.io", [Validators.required, Validators.email])
    })
  }
  allowed(control: FormControl): { [str: string]: boolean } {
    console.log(control.value);

    if (this.allowedUserName.indexOf(control.value) !== -1) {
      return { 'validated': true }
    } else {
      return { 'validated': false };
    }
    // return null; this doesn't work
  }
  onSubmit() {
    console.log(this.registerForm);

  }
}
