import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './direttive/highlight.directive';
import { UpperCasePipe } from '@angular/common';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UpperCasePipe, 
            CommonModule, 
            RouterOutlet, 
            MatButtonModule, 
            MatInputModule, 
            FormsModule, 
            HighlightDirective, 
            ContactComponent,
            HomeComponent,
            RouterLink,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'prove'; 
  constructor(){}

}
