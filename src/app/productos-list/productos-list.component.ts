import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';
import { ProductoDataServiceService } from '../producto-data-service.service';

@Component({
  selector: 'app-productos-list',
  standalone: false,
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss'
})
export class ProductosListComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoDataService: ProductoDataServiceService) { }

  ngOnInit(): void {
    this.productoDataService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
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
