import { Injectable } from '@angular/core';
import { Producto } from './productos-list/Producto';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoCarritoService {
  
 
  private _productos : Producto[] = [];
  private _productosSubjects : BehaviorSubject<Producto[]> = new BehaviorSubject(this._productos);
  public productos : Observable<Producto[]> = this._productosSubjects.asObservable();
  constructor() { }

 addToCart(producto:Producto){
    let index = this._productos.findIndex(b => b.nombre === producto.nombre);
    if(index == -1)
      this._productos.push({...producto});
    else
      this._productos[index].quantity += producto.quantity;
    if (producto.quantity == 0){
      this._productos.splice(index,1);
    }
  }
  comprar(): void {
    if (this._productos.length === 0) {
      alert("No hay productos en el carrito");
      return;
    }
    
    this._productos.forEach(producto => {
      producto.cantidad -= producto.quantity;
      producto.quantity = 0; 
    });
    this._productos = [];
    this._productosSubjects.next(this._productos);

    alert("Compra realizada con éxito");
  }
  
}
