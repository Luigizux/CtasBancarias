import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './../Shared/Model/Usuario';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private api = "http://localhost:8080/cuentabancaria/v1/";
  constructor(private http: HttpClient) { }

  getTask(rut: string) {
    const path = `${this.api}obtenercuentas/${rut}`;
    return this.http.get<Usuario>(path);;
  }
  createTask(task: Usuario) {
    const jtask = JSON.stringify(task);
    console.log('Este es el objeto a mandar: ' + jtask)
    const path = `${this.api}crearusuariobancario`;
    const ur = this.http.post<any>(path, jtask, { headers: httpOptions.headers });
    console.log(ur);
    return ur
  }
  updateTask(task: Usuario) {
    const path = `${this.api}crearusuariobancario`;
    return this.http.post(path, task);
  }
  deleteTask(rut: number) {
    const path = `${this.api}obtenercuentas/${rut}`;
    return this.http.delete(path);
  }
}
