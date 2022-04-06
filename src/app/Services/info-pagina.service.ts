import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { }

getInfoPagina(){
  return this.http.get('assets/data/Infopagina.json');
}

getInfoEquipo(){
  return this.http.get('https://aplicacionpam-ea9df-default-rtdb.firebaseio.com/Equipo.json');
}


}
