import { PasswordValidators } from './password.validators';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent  {
  form: FormGroup;

  constructor(fb: FormBuilder) {
  this.form = fb.group({
    old: ['', Validators.required, PasswordValidators.validOldPassword],
    new: ['', Validators.required],
    confirm: ['', Validators.required]
  }, {
    validator: PasswordValidators.passwordsShouldMatch
  });
}
  
  changePass(){
    
  }

  get old(): any { return this.form.get('old'); }
  get new(): any { return this.form.get('new'); }
  get confirm(): any { return this.form.get('confirm'); }
}

