import { Component } from '@angular/core';
import { ConsultasService } from './Service/consultas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CuentasBancarias';
  
  constructor(private consultasService: ConsultasService){}
}
