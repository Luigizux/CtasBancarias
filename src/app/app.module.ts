import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ConsultasService } from './Service/consultas.service'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { BorrarCuentaComponent } from './borrar-cuenta/borrar-cuenta.component';
import { ObtenerCuentaComponent } from './obtener-cuenta/obtener-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    CrearCuentaComponent,
    BorrarCuentaComponent,
    ObtenerCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
