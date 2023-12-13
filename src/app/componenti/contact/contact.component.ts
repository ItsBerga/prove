import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ContattoComponent } from '../contatto/contatto.component';

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
  constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
  }
}
