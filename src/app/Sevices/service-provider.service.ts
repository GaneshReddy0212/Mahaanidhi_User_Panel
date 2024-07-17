import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serviceprovider } from '../Models/serviceProvider';
import { environment } from '../Environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  public apiurl = environment.apiUrl + "Serviceproviders";

  constructor(public http: HttpClient) { }

  getServiceProviders() {
    return this.http.get(this.apiurl);
  }

  getServiceProviderById(id: number) {
    return this.http.get(`${this.apiurl}/${id}`);
  }

  createServiceProvider(data: Serviceprovider) {
    return this.http.post(this.apiurl, data);
  }

  updateServiceProvider(id: number, data: Serviceprovider): Observable<any> {
    // Assuming there is an 'id' property in the Serviceprovider object
    return this.http.put(`${this.apiurl}/${data.id}`, data);
  }


  deleteServiceProvider(id: number): Observable<any> {
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
