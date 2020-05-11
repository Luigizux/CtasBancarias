import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
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
  public cta = new Cuenta();
  checkTipo : Array<Object> = [{
    nombreCuenta: 'Cuenta corriente',
    idCta: 1
  },
  {
    nombreCuenta: 'Cuenta de ahorro',
    idCta: 2
  },
  {
    nombreCuenta: 'Cuenta vista',
    idCta: 3
  }]

  aux: number = 22222;
  form = new FormControl('');

  public profileForm = new FormGroup({
    rut : new FormControl('', Validators.required),
    dv: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cuentaForm: new FormGroup({
      nroCuenta: new FormControl(this.aux),
      montoInicial: new FormControl('', Validators.required),
      tipoDeCta: new FormControl('', Validators.required)
    })
  });
  constructor(private consultasService: ConsultasService, private fb: FormBuilder) { }
  
  createTask()
  {
    
    let cuentaForm = this.profileForm.get("cuentaForm").get("nroCuenta");
    // this.lisCuenta.push(cuentaForm);
    let j = 0;
    
    console.log("change: " + cuentaForm);
    
    const tipo = new TipoCuenta();
    
    const user = new Usuario();

    user.rut = this.profileForm.get('rut').value;
    user.dv = this.profileForm.get('dv').value;;
    user.nombre = this.profileForm.get('nombre').value;;
    user.apellido = this.profileForm.get('apellido').value;
    // this.cta.montoCuenta = cuentaForm.get("montoInicial").value;
    // this.cta.numeroCuenta = this.aux;
    // tipo.idCuenta = cuentaForm.get("tipoDeCta").value;
    // this.cta.tipoCuenta = tipo;
    // this.lisCuenta.push(this.cta);
    user.cuenta = this.lisCuenta;

    this.aux = this.aux + 1;
    
    console.log("Rut: " + user.rut);
    console.log("dv: " + user.dv);
    console.log("nombre: " + user.nombre);
    console.log("apellido: " + user.apellido);
    console.log("monto: " + this.cta.montoCuenta);
    console.log("numeroCta: " + this.cta.numeroCuenta);
    console.log("idcta: " + tipo.idCuenta);
    console.log("listadoCta: " + this.lisCuenta);
    console.log("listado 2 cta: " + user.cuenta);
    this.consultasService.createTask(user).subscribe(respuesta => console.log(respuesta));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }
  onChange(cta: number, monto, isChecked: boolean) {
    const ctaArray = <FormArray>this.profileForm.controls.cuentaForm;

    if (isChecked) {
      this.cta.montoCuenta = monto;
      this.cta.numeroCuenta = this.aux;
      this.cta.tipoCuenta.idCuenta = cta;
      this.lisCuenta.push(this.cta);
      
      // this.cta.push(new FormControl(cta));
      this.profileForm.controls.cuentaForm.setValue(ctaArray);

    } else {
      let index = ctaArray.controls.findIndex(x => x.value == cta)
      ctaArray.removeAt(index);
    }
  }
  
}
