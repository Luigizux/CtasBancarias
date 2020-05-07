import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './../Service/consultas.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Usuario } from './../Shared/Model/Usuario'
import { Cuenta } from './../Shared/Model/Cuenta'
import { TipoCuenta } from './../Shared/Model/TipoCuenta'
import { Any } from 'json2typescript';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

constructor(private consultasService: ConsultasService){

}
/* updateTask() {
  const task = {
    id: '1',
    userId: '1',
    title: 'change title',
    completed: true
  };
  this.consultasService.updateTask(task)
  .subscribe(todo => {
    console.log(todo);
  });
}*/
ngOnInit() {

}
}
