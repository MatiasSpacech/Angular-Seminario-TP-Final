import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos-list/Producto';
import { ProductoCarritoService } from '../producto-carrito.service';

@Component({
  selector: 'app-productos-carrito',
  standalone: false,
  templateUrl: './productos-carrito.component.html',
  styleUrl: './productos-carrito.component.scss'
})
export class ProductosCarritoComponent implements OnInit {
  productos : Producto[] = [];
  constructor(private productosCartService: ProductoCarritoService) { }

  ngOnInit(): void {
    this.productosCartService.productos
    .subscribe(data => this.productos = data);
  }
  compra(): void {
    this.productosCartService.comprar();
  }

  total(){
    let sum=0;
    this.productos.forEach(producto => {
      sum += producto.quantity * producto.precio
    });
    return sum;
  }

}
