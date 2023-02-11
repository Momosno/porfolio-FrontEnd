import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Injectable--> que pueda ser inyectado en componentes
import { Observable } from 'rxjs';


/*OBSERVABLES EVENTOS ASINCRONOS (PARA Q LA APP)
FUNCUIONE, POR MAS QUE ESPERE AL SERVIDOR HTTP*/

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  //Injecto en el servicio el http service

  prueba() {
    console.log("servicio portfolio OK")
  }

  obtenerDatos(): Observable<any> {
    return this.http.get("./assets/data/data.json");
  }



}
