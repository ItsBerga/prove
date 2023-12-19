import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ContattoComponent } from '../contatto/contatto.component';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor,
            NgIf,
            RouterLink,
            ContattoComponent,
            RouterOutlet
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  persone: any
  constructor(private firebase: FirebaseService){ }

  ngOnInit(): void {
    this.firebase.getPersone("https://prova-c6e07-default-rtdb.europe-west1.firebasedatabase.app/persone.json")
    
    .subscribe((data : any) =>{
      console.log(data)
      this.persone = Object.keys(data).map((key)=>{
        data[key]["id"]= key
        return data[key]
      })
      console.log(this.persone)
    })
    
  }
}
