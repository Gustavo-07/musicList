import { Component, OnInit } from '@angular/core';
import { MusicaService} from 'src/services/musica.service';
import { Musica } from 'src/models/musica';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {

  constructor( private musicaServices: MusicaService) { }

  canciones: Musica[] = [];

  async ngOnInit() {
     (await this.musicaServices.getcanciones()).subscribe(
       response => {
        this.canciones = <Musica[]>response.data;
       });
  }

  convertidor( num: number){
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return hours + ":" + minutes;
}

}
