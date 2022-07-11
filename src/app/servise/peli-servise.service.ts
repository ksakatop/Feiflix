import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PeliServiseService {

  private Api_URL = "https://api.themoviedb.org/3/movie/popular"

  private params = new HttpParams()
      .set('api_key', 'Tu api_key de la paguna TMDB')
      .set('page', 1)
      .set('limit', 18);

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: this.params
  }

  constructor(private http: HttpClient) { }

 async getAll():Promise<any>{

  return new Promise (resolve =>{
    this.http.get(this.Api_URL, this.httpOptions)
      .subscribe(data =>{
        resolve (data)
      })
  })
  
 }
}
