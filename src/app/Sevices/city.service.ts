import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Models/citt';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public apiurl = "http://localhost:5148/api/Cities";

  constructor(public http: HttpClient) { }

  getCities() {
    return this.http.get(this.apiurl);
  }

  getCityById(id: number) {
    return this.http.get(`${this.apiurl}/getCityById?Id=${id}`);
  }

  createCity(data: City) {
    return this.http.post(this.apiurl, data);
  }

  updateCity(id: number, data: any): Observable<any> {
    // Assuming there is an 'id' property in the City object
    return this.http.put(`${this.apiurl}/${data.id}`, data);
  }

  deleteCity(id: number) {
    return this.http.delete(this.apiurl + "/" + id);
  }
  // http://localhost:5148/api/Cities/3
}
