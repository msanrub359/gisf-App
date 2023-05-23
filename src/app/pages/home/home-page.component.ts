import { Gif } from './../../gifs/interfaces/gifs';
import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',

})
export class HomePageComponent {
  constructor(private gifsService:GifsService){
  }

  get gifs():Gif[]{
    return this.gifsService.aGifList;
  }

}
