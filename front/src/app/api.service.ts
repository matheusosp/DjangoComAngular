import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://35.247.247.197:8000/';
  token = 'Token aaf3414d754bd382d13c32613d40edfde6ed27cb'
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