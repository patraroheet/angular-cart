import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcomService {

  constructor(private http: HttpClient) {
  }

  getProductList() {
    return this.http.get('../assets/json/product.json');
  }
}
