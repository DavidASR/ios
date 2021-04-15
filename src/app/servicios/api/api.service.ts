import { Injectable } from '@angular/core';
import { loginI } from '../../interface/login.interface';
import { responseI } from '../../interface/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://reqres.in/api/login.";

  constructor(private http:HttpClient) { }

  loginByEmail(form:loginI):Observable<responseI>{
    let direccion = this.url;
    return this.http.post<responseI>(direccion,form);
  }

}
