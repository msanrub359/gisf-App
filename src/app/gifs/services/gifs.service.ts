import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apykey:string='muveGpC5TAgI6GOfUPJSvyZOUaeNjY9L';
  private _tagsHistory:string[]=[];

  constructor(private http:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }
  private organizeHistory(tag:string){
    tag=tag.toLowerCase();
    if (this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter(item=> item!=tag);
    }
    //recortar solo los 10 primeros tags
    this._tagsHistory=this._tagsHistory.splice(0,9);
  }
  searchTag(tag:string):void{
    if (tag.length!==0){
      this.organizeHistory(tag);
      // this.http.get('https://api.giphy.com/v1/gifs/search?api_key=muveGpC5TAgI6GOfUPJSvyZOUaeNjY9L&q=valorant&limit=20')
      // .subscribe(resp=>{
      //   console.log(resp);
      // })
    }

    console.log(this._tagsHistory);
  }
}
