import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { Producto } from './productos-list/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoDataServiceService {
  private apiUrl = 'https://6663485c62966e20ef0c2c18.mockapi.io/veterinaria/producto'; 
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl); 
  }



}
