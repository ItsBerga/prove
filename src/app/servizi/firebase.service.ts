import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertPersona(url: string, body: {}){
    return this.http.post(url, body)
  }

  getPersone(url: string){
    return this.http.get(url)
  }

  deletePersona(url: string, id: string){
    console.log(`${url}/${id}.json`)
    return this.http.delete(`${url}/${id}.json`)
  }

  patchPersona(url: string, id: string, body:{}){
    return  this.http.patch(`${url}/${id}.json`, body)
  }
}
