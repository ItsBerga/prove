import { Component, OnInit, } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { get } from 'http';
import { FirebaseService } from '../../servizi/firebase.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authService: AuthService){

  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.signUp({email: email, password: password, returnSecureToken: true})
    .subscribe(data=>{
      console.log(data)
    })
    form.reset() 

  }

}
