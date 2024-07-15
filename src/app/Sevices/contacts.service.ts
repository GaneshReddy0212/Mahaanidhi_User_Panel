import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from '../Models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public apiurl = "http://localhost:5148/api/Contact";

  constructor(public http: HttpClient) { }

  getContacts() {
    return this.http.get(this.apiurl);
  }

  getContactById(id: number) {
    return this.http.get(`${this.apiurl}/${id}`);
  }

  createContact(data: Contacts) {
    return this.http.post(this.apiurl, data);

  }
}
