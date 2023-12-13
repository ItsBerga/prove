import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: "black"},
    {nome: "marco", cognome: "verdi", isOnline: true, color: "yellow"},
    {nome: "anna", cognome: "neri", isOnline: true, color: "pink"},
    {nome: "maria", cognome: "grazia", isOnline: false, color: "grey"},
    {nome: "lucia", cognome: "berga", isOnline: false, color: "orange"},
    {nome: "carlo", cognome: "alberto", isOnline: false, color: "purple"},
  ]

  constructor() { }
  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
}
