import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cuenta } from '../Shared/Model/Cuenta';
import { TipoCuenta } from '../Shared/Model/TipoCuenta';
import { Usuario } from './../Shared/Model/Usuario'
import { ConsultasService } from '../Service/consultas.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public lisCuenta: Cuenta[] = [];
  
  form = new FormControl('');

  profileForm = new FormGroup({
    rut : new FormControl(''),
    dv: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cuent: new FormGroup({
      nroCuenta: new FormControl(''),
      montoInicial: new FormControl(''),
      tipoDeCta: new FormControl('')
    })
  });
  constructor(private consultasService: ConsultasService) { }

  createTask()
  {
    const tipo = new TipoCuenta();
    const cta = new Cuenta();
    const user = new Usuario();

    user.rut = '19020273';
    user.dv = '9';
    user.nombre = 'Luis';
    user.apellido = 'Zúñiga';
    cta.montoCuenta = 10000;
    cta.numeroCuenta = 222222222;
    tipo.idCuenta = 1;
    cta.tipoCuenta = tipo;
    this.lisCuenta.push(cta);
    user.cuenta = this.lisCuenta;
    this.consultasService.createTask(user).subscribe(respuesta => console.log(respuesta));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
  ngOnInit(): void {
  }
  
}
