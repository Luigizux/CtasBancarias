import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Cuenta } from '../Shared/Model/Cuenta';
import { TipoCuenta } from '../Shared/Model/TipoCuenta';
import { Usuario } from './../Shared/Model/Usuario'
import { ConsultasService } from '../Service/consultas.service';
import { Any } from 'json2typescript';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public lisCuenta: Cuenta[] = [];
  aux: number = 22222;
  profileForm: FormGroup; 
  checkTipo: Array<Any> = [
    { name: 'Cuenta corriente', id: 1 },
    { name: 'Cuenta de ahorro', id: 2 },
    { name: 'Cuenta vista', id: 3 }
  ];
  
  constructor(private consultasService: ConsultasService, private fb: FormBuilder) { 
    //const formCheckbox = this.checkTipo.map(a => new FormControl(false));
    //const control = this.checkTipo.map(c => new FormControl(false));
    //control[0].setValue(true);
    const soloNum = /^([0-9-k_K])*$/;
    this.profileForm = this.fb.group({
      checkTipo : this.fb.array([], [Validators.required]),
      rut : new FormControl('', [Validators.required, Validators.minLength(7),
        Validators.maxLength(8), Validators.pattern(soloNum)]),
      dv: new FormControl('', [Validators.required, Validators.minLength(1),
        Validators.maxLength(1)]),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      montoInicial: this.fb.array([], [Validators.required])
    })
   }

   onCheckboxChange(e) {
    const checkArray: FormArray = this.profileForm.get('checkTipo') as FormArray;
    
    // console.log(checkArray.length);
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  changeMonto(e) {
    const arrMonto: FormArray = this.profileForm.get('montoInicial') as FormArray;
    // console.log("arrmonto en changeMonto() = " + e.target.id);
    if(e.target.value) {
      arrMonto.push(new FormControl(e.target.value));
      // console.log("el arrego = " + arrMonto.value);
    }
    else {
      let i: number = 0;
      arrMonto.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          arrMonto.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onSubmit() {
    if(this.profileForm.valid) {
    const checkArray: FormArray = this.profileForm.get('checkTipo') as FormArray;
    const arrMonto: FormArray = this.profileForm.get('montoInicial') as FormArray;

    // console.log('monto arreglo = ' + arrMonto.value)
    const user = new Usuario();

    user.rut = this.profileForm.get('rut').value;
    user.dv = this.profileForm.get('dv').value;;
    user.nombre = this.profileForm.get('nombre').value;;
    user.apellido = this.profileForm.get('apellido').value;

    let o = 0;
    for (const i of checkArray.controls) {
      const cta = new Cuenta();
      const tipo = new TipoCuenta();
    
      tipo.idCuenta = parseInt(i.value);
      cta.numeroCuenta = this.aux;

      let e = 0;
      for (const l of arrMonto.controls) {
        if(o == e) {
          // console.log("l.value = " + l.value);
          cta.montoCuenta = parseInt(l.value);
        }
        e++
      }
      cta.tipoCuenta = tipo;
      this.lisCuenta.push(cta);
      this.aux = this.aux + 1;
      o++;
    }
    user.cuenta = this.lisCuenta;

    this.consultasService.createTask(user).subscribe(respuesta => console.log(respuesta));
    this.profileForm.reset();
    this.profileForm.controls.checkTipo.reset();
    this.profileForm.controls.montoInicial.reset();
    }else {
      alert('Formulario no válido');
    }
  }
  ngOnInit(): void {
  }
}