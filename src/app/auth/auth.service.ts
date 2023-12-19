import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyBdLe4dHJzSncTClDmRIsbzEgg0hUvdqsg]"
  isLoggedIn = true;
  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  signUp(body: {}){
    return this.http.post(this.url, body)
  }
}
