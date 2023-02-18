import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  url = '';

  sendMessage(data: any) {
    return this.http.post(this.url, data);
  }
}
