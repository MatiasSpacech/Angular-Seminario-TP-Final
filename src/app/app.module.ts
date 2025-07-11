import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosCarritoComponent } from './productos-carrito/productos-carrito.component';
import { ProductosPrincipalComponent } from './productos-principal/productos-principal.component';
import { AboutComponent } from './about/about.component';
import { ProductoDataServiceService } from './producto-data-service.service';
import { VeterinariaPrincipalComponent } from './veterinaria-principal/veterinaria-principal.component';
import { FormularioAboutComponent } from './formulario-about/formulario-about.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    ProductosCarritoComponent,
    ProductosPrincipalComponent,
    AboutComponent,
    VeterinariaPrincipalComponent,
    FormularioAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    
    ProductoDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
