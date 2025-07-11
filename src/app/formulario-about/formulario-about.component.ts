import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from './Mensaje';


@Component({
  selector: 'app-formulario-about',
  standalone: false,
  templateUrl: './formulario-about.component.html',
  styleUrl: './formulario-about.component.scss'
})
export class FormularioAboutComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl(''),
    mensaje: new FormControl('', Validators.required)
  });
  constructor(private http: HttpClient) { }
  apiContactoUrl = 'https://6663485c62966e20ef0c2c18.mockapi.io/veterinaria/mensajes';
  mensajes: Mensaje[] = [];

  ngOnInit(): void {
    this.obtenerMensajes();
  }
  onSubmit() {
    if (this.formularioContacto.valid) {
      console.log('Formulario enviado:', this.formularioContacto.value);
      this.http.post(this.apiContactoUrl, this.formularioContacto.value)
        .subscribe({
          next: (response: any) => {
            alert('Mensaje enviado con éxito:  ' + response.mensaje);
            this.formSubmitted.emit(this.formularioContacto.value);
            this.obtenerMensajes(); // Actualizar la lista de mensajes después de enviar uno nuevo
          },
          error: (error: any) => {
            console.error('Error al enviar el mensaje', error);
          }
        });

      this.formularioContacto.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
  obtenerMensajes() {
    return this.http.get(this.apiContactoUrl).subscribe({
      next: (response: any) => {
        this.mensajes = response;
      },
      error: (error: any) => {
        console.error('Error al obtener los mensajes', error);
      }
    });

  }
  deleteMensaje(id: string) {
    this.http.delete(`${this.apiContactoUrl}/${id}`).subscribe({
      next: () => {
        this.obtenerMensajes(); 
      },
      error: (error: any) => {
        console.error('Error al eliminar el mensaje', error);
      }
    });
  }

}