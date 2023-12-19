import { Component, OnInit, } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button'; 
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { get } from 'http';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  homeform : FormGroup 

  constructor(private firebase: FirebaseService){}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl("luca", Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    })

  }

  onSubmit(){
    console.log(this.homeform)

    
    this.firebase.insertPersona("https://prova-c6e07-default-rtdb.europe-west1.firebasedatabase.app/persone.json", 
    {nome: this.homeform.value.nome, email: this.homeform.value.email}
    ).subscribe(data => {
      console.log(data)
    })
  }

  onDeletePersona(){
    this.firebase.deletePersona("https://prova-c6e07-default-rtdb.europe-west1.firebasedatabase.app/persone", "-Nm1JIU2gx8zstjZG6FY")
    .subscribe(data=> {console.log(data)})
  }

  onPatchPersona(){
    this.firebase.patchPersona(
      "https://prova-c6e07-default-rtdb.europe-west1.firebasedatabase.app/persone", 
      "-Nm1V24hhQ7lKukmNJqw",
      {email:"prova@prova.it"},
      )
      .subscribe(data=> {
        console.log(data)
      })
  }

}
