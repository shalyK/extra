import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class PersonenService {
  baseUrl= "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getPersonen(){
    return this.http.get(`${this.baseUrl}users`);
  }
  getPerson(user){
    return this.http.get(`${this.baseUrl}users/${user}`);
  }
  updatePerson(user: User){
    return this.http.put(`${this.baseUrl}users/${user._id}`, user);
  }
  addPerson(user: User){
    return this.http.post(`${this.baseUrl}users/toevoegen`,user);
  }
  deleteUser(user){
    return this.http.delete(`${this.baseUrl}users/${user}`)
  }
}
