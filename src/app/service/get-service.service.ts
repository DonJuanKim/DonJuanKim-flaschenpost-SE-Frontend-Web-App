import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://flapotest.blob.core.windows.net/test/ProductData.json'
    );
  }
}
