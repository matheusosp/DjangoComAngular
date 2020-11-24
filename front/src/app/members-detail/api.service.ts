import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

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
