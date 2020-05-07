import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './../Service/consultas.service'

@Component({
  selector: 'app-borrar-cuenta',
  templateUrl: './borrar-cuenta.component.html',
  styleUrls: ['./borrar-cuenta.component.css']
})
export class BorrarCuentaComponent implements OnInit {

  constructor(private obtenerCuenta: ConsultasService) { }

  deleteTask(nroCuenta){
    this.obtenerCuenta.deleteTask(nroCuenta)
    .subscribe((data) => {
    console.log(data);
  });
  }
  ngOnInit(): void {
  }

}
