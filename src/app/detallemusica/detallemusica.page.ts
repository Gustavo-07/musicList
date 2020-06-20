import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MusicaService} from 'src/services/musica.service';
import { Musica } from 'src/models/musica';

@Component({
  selector: 'app-detallemusica',
  templateUrl: './detallemusica.page.html',
  styleUrls: ['./detallemusica.page.scss'],
})
export class DetallemusicaPage implements OnInit {

  currentMusica: Musica;

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicaServices:MusicaService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if( !paramMap.has('musicaIndex')){
        return;
      }
      const musicaId = paramMap.get('musicaIndex');

      (await this.musicaServices.getcanciones()).subscribe(
        response => {
         this.currentMusica = (<Musica[]>response.data)[musicaId];
         console.table(this.currentMusica);
        });

    });
  }

  convertidor( num: number){
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ":" + minutes;
  }

}
