import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musica } from 'src/models/musica';

const obtenerCanciones = '/playlist/93489551/tracks';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor( private httpClient: HttpClient) { }

  async getcanciones(){
    return this.httpClient.get<any>(obtenerCanciones);
  }
}
