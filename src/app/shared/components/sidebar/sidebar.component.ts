import { Gif } from './../../../gifs/interfaces/gifs';
import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, Input } from '@angular/core';
import { GifsModule} from 'src/app/gifs/gifs.module';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  public gifs:Gif[]=[];

  constructor(private gifsServices:GifsService){

  }
  get tags():string[]{
    return this.gifsServices.tagsHistory;
  }
  searchTag(item:string):void{
    this.gifsServices.searchTag(item)
  }
}
