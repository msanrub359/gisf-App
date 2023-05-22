import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';
import { GifsModule } from 'src/app/gifs/gifs.module';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsServices:GifsService){

  }
  get tags(){
    return this.gifsServices.tagsHistory;
  }
}
