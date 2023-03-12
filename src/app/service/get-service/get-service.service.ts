import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>(
      'https://flapotest.blob.core.windows.net/test/ProductData.json'
    );
  }
}
