import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000';
  token = 'Token 0f190a47d2baf29b1eeaed7ea8d239078464409c'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getMember(id:number | string | null) : Observable<any>{
    return this.http.get(` ${this.baseUrl}/members/${id}/`, 
      {headers: this.httpHeaders}
    );
  };

  updateMember(member: { name?: string; surname?: string;phone?:string;adress?:string; id?: number; }) : Observable<any>{
    let body = { name: member.name, surname:member.surname , phone:member.phone};
    return this.http.put(this.baseUrl + '/members/'+member.id+'/', body,
      {headers: this.httpHeaders}
    );
  };
  deleteMember(id:number): Observable<any>{
    return this.http.delete(this.baseUrl + '/members/'+id+'/', 
      {headers: this.httpHeaders}
    );
  }; 
}
