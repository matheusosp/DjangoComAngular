import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  token = 'Token 0f190a47d2baf29b1eeaed7ea8d239078464409c'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private http: HttpClient) { }

    getAllMembers() : Observable<any>{
      return this.http.get(this.baseUrl + 'members/', 
        {headers: this.httpHeaders}
      );
    };

    getMember(id: number) : Observable<any>{
      return this.http.get(this.baseUrl + 'members/'+id+'/', 
        {headers: this.httpHeaders}
      )
    };

    saveNewMember(member: { name: string; surname: string; phone: string; }) : Observable<any>{
      return this.http.post(this.baseUrl + 'members/', member,
        {headers: this.httpHeaders}
      )
    };
}