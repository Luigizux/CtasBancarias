import { Component, OnInit } from '@angular/core';
import { ConsultasService } from './../Service/consultas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-obtener-cuenta',
  templateUrl: './obtener-cuenta.component.html',
  styleUrls: ['./obtener-cuenta.component.css']
})
export class ObtenerCuentaComponent implements OnInit {

  constructor(private consultasService: ConsultasService) { }
  
  nombre: string;
  apellido: string;
  public Cta: Array<Object> = [];
  soloNum = /^([0-9])*$/;
  cuentasForm = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(this.soloNum)])
  })

  getTask() {
    if(this.cuentasForm.valid) {
      this.Cta = [];
      const Rut: string = this.cuentasForm.get('rut').value;
      // console.log('Mensaje: ' + Rut);
      this.consultasService.getTask(Rut)
      .subscribe(Respuesta => {
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
      }
      // console.log(this.Cta);
    });
    }else {
      alert('Asegúrese de que el rut tenga el formato correcto (sin puntos ni dígito verificador)')
    }
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.cuentasForm.value);
  }
  ngOnInit(): void {
  }

}
