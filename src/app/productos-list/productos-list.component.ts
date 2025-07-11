import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';
import { ProductoDataServiceService } from '../producto-data-service.service';
import { ProductoCarritoService } from '../producto-carrito.service';

@Component({
  selector: 'app-productos-list',
  standalone: false,
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss'
})
export class ProductosListComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoDataService: ProductoDataServiceService,
              private productosCarritoService: ProductoCarritoService) { }

  ngOnInit(): void {
    this.productoDataService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    })   
  }
  
  addCart(producto: Producto) {
    this.productosCarritoService.addToCart(producto);
    producto.cantidad -= producto.quantity;
    producto.quantity = 0; 
     
  }

  upQuantity(producto : Producto): void{
    if(producto.quantity < producto.cantidad && producto.cantidad != 0) {
      producto.quantity ++;
     
    }
  }

  downQuantity(producto : Producto): void{    
    if(producto.quantity > 0) {
      producto.quantity --;
     
    }
  }

  verifyProductoQuantity(producto : Producto): void {
    if(producto.cantidad < producto.quantity) {
      alert("No quedan mas en stock");
      producto.quantity = producto.cantidad;
    }

    if(producto.quantity < 0) {
      alert("No se pueden pedir menos que 0 productos");
      producto.quantity = 0;
    }
  }
  /*productos : Producto[]= [{
    "nombre": "Collar",
    "precio": 10000,
    "descripcion": "un collar para perro",
    "imagen": "assets/img/collar1.jpg",
    "cantidad": 10,
    oferta: true,
  },
  {
    "nombre": "Royal Canin",
    "precio": 20000,
    "descripcion": "comida para perro",
    "imagen": "assets/img/comida1.jpg",
    "cantidad": 5,
    oferta: false,
  },
  {
    "nombre": "hueso de juguete",
    "precio": 5000,
    "descripcion": "juguete para perro",
    "imagen": "assets/img/juguete1.jpg",
    "cantidad": 20,
    oferta: true,
  },
  {
    "nombre": "Antiparasitario",
    "precio": 15000,
    "descripcion": "medicamento para perro",
    "imagen": "assets/img/medicamento1.jpg",
    "cantidad": 2,
    oferta: false,
  },
];  */
  
}
