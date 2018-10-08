// angular core
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// environmet
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    const url = environment.apiUrl;

    return this._http.get(url);
  }
}
