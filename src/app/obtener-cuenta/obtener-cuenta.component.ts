import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './../Service/consultas.service';

@Component({
  selector: 'app-obtener-cuenta',
  templateUrl: './obtener-cuenta.component.html',
  styleUrls: ['./obtener-cuenta.component.css']
})
export class ObtenerCuentaComponent implements OnInit {

  constructor(private consultasService: ConsultasService) { }
  Tipo;
  nombre: string;
  apellido: string;
  public Cta: Array<Object> = [];

  getTask(Rut) {
    console.log(Rut);
    this.consultasService.getTask(Rut)
    .subscribe(Respuesta => {
      console.log('Mensajes: ' + Respuesta.cuenta.toString);

      this.nombre = Respuesta.nombre;
      this.apellido = Respuesta.nombre;
      let j: number = 0;

      for(let i of Respuesta.cuenta) {
        this.Cta[j] = {
          numeroCuenta: i.numeroCuenta,
          montoCuenta: i.montoCuenta,
          tipo: i.tipoCuenta.nombreCuenta
        }
        j = j + 1;
        console.log(i + " " + j);
        
      }
      console.log(this.Cta);
    });
  }
  ngOnInit(): void {
  }

}
