import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './model/contact';
import { Observable } from 'rxjs';
import { Article } from './model/article';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER= "http://localhost:64781/api";
  constructor(private httpClient: HttpClient) { }
  getAll() : Observable<Array<Contact>>{
    return this.httpClient.get<Array<Contact>>(`${this.AUTH_SERVER}/Contact`);
  }
  delete(id){
    return this.httpClient.delete(`${this.AUTH_SERVER}/Contact/${id}`);
  }
  getOne(id) : Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.AUTH_SERVER}/Contact/${id}`);
  }
  Create(contact){
    return this.httpClient.post(`${this.AUTH_SERVER}/Contact`, contact, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
      });
  }
  update(id,contact){
    return this.httpClient.put(`${this.AUTH_SERVER}/Contact/${id}`, contact, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    })
  }
  getByAge(min , max): Observable<Array<Contact>>{
    return this.httpClient.get<Array<Contact>>(`${this.AUTH_SERVER}/Contact/ByAge?min=${min}&max=${max}`);
  }
  getConnexion(id, password):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.AUTH_SERVER}/Contact/ByAge?id=${id}&pass=${password}`);
  }
  getArticles():Observable<Array<Article>>{
    return this.httpClient.get<Array<Article>>(`${this.AUTH_SERVER}/Article`);
  }
}
