import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
@ViewChild('inputTag')
public txtInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsServices:GifsService){

  }
  searchTag():void{
    const newTag=this.txtInput.nativeElement.value;

    this.gifsServices.searchTag(newTag);
    
    this.txtInput.nativeElement.value="";
  }

}
