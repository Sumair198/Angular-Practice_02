import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonsDataService {

  constructor(private http:HttpClient) { }
  getpersonsData()
  {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url)
  }
}
