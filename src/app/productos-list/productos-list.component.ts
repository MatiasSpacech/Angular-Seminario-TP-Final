import { Component } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos-list',
  standalone: false,
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss'
})
export class ProductosListComponent {
  productos : Producto[]= [{
    "nombre": "Collar",
    "precio": 10000,
    "descripcion": "un collar para perro",
    "imagen": "assets/img/collar1.jpg",
    "cantidad": 10
  },
  {
    "nombre": "Royal Canin",
    "precio": 20000,
    "descripcion": "comida para perro",
    "imagen": "assets/img/comida1.jpg",
    "cantidad": 5
  },
  {
    "nombre": "hueso de juguete",
    "precio": 5000,
    "descripcion": "juguete para perro",
    "imagen": "assets/img/juguete1.jpg",
    "cantidad": 20
  },
  {
    "nombre": "Antiparasitario",
    "precio": 15000,
    "descripcion": "medicamento para perro",
    "imagen": "assets/img/medicamento1.jpg",
    "cantidad": 2
  },
];  
  
}
