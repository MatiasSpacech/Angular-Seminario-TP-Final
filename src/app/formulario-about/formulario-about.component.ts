import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-about',
  standalone: false,
  templateUrl: './formulario-about.component.html',
  styleUrl: './formulario-about.component.scss'
})
export class FormularioAboutComponent {
  @Output() formSubmitted = new EventEmitter();
  
  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl(''),
    mensaje: new FormControl('', Validators.required)
   });
  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.formularioContacto.valid) {
      console.log('Formulario enviado:', this.formularioContacto.value);      
           this.http.post('https://6663485c62966e20ef0c2c18.mockapi.io/veterinaria/mensajes', this.formularioContacto.value)
        .subscribe({
          next: (response: any) => {
            console.log('Mensaje enviado con éxito', response);
            this.formSubmitted.emit(this.formularioContacto.value);
          },
          error: (error: any) => {
            console.error('Error al enviar el mensaje', error);
          }
        });

      this.formularioContacto.reset(); // Resetea el formulario después de enviarlo
    } else {
      console.log('Formulario inválido');
    }
  }
}
