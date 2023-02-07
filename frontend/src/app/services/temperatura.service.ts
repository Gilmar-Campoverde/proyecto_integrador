import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  readonly URL_API = 'http://localhost:3000/api/temperatura';
  constructor(private http: HttpClient) {

   }

   getTemperatuar(){
    return this.http.get(this.URL_API);
   }

   
}
