import { Component, OnInit } from '@angular/core';
import { Cds } from './Variables';
import { Router } from '@angular/router';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-lista-cds',
  templateUrl: './lista-cds.component.html',
  styleUrls: ['./lista-cds.component.scss']
})
export class ListaCdsComponent implements OnInit {

  anio: number;
  
  
  constructor(private cart: ServicioCarritoService,private router: Router) {
    
    this.anio = new Date().getFullYear();
  
  }

  general: Cds[] = [

    {
      titulo: 'dasdasdada',
      genero: 'Rock Nacional',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'jajajj',
      image: 'assets/img/soda.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 0,
      cantidad: 0
    },

    {
      titulo: 'adadadad',
      genero: 'Rock I',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'adadasd',
      image: 'assets/img/acdc.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sdadasdad',
      genero: 'Rock Nacional',
      autor: 'Soda Stereo',
      anio: 2022,
      descripcion: 'asdadad',
      image: 'assets/img/leo.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sdasdasda',
      genero: 'Latinos',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'asdasdadsa',
      image: 'assets/img/mana.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 0,
      cantidad: 0
    },

    {
      titulo: 'sadadasd',
      genero: 'Reggae',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'asdasdad',
      image: 'assets/img/losPericos.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 77,
      cantidad: 0
    }
  ];
  
  limite(c: number) {
    alert("no puede superar mas de "+c+" unidades");
  }
  
  agregar (general): void {
    console.log(general);
    if (general.cantidad != 0) {
      this.cart.agregar(general);
      general.stock -= general.cantidad;
      console.log(general.stock);
      general.cantidad = 0;
    } else {
      alert("ingrese una cantidad valida");
    }
  }

  verCd(id: number) {
    this.router.navigate(['/general', id]);
  }

  ngOnInit(): void {
  }

}
