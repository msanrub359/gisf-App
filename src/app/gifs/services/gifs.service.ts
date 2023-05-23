import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs';



@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private url='https://api.giphy.com/v1/gifs';
  private apikey:string='muveGpC5TAgI6GOfUPJSvyZOUaeNjY9L';
  private _tagsHistory:string[]=[];
  public aGifList:Gif[]=[]

  constructor(private http:HttpClient) {
    this.getLocalStorage();
    this.searchTag(this._tagsHistory[0])
   }

  get tagsHistory(){
    return [...this._tagsHistory];
  }
  private organizeHistory(tag:string){
    tag=tag.toLowerCase();
    if (this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter(item=> item!=tag);
    }
    //añadir
    this._tagsHistory.unshift(tag);
    //recortar solo los 10 primeros tags
    this._tagsHistory=this._tagsHistory.splice(0,9);
    this.saveLocalStorage();
  }
  searchTag(tag:string):void{
    if (tag.length!==0){
      this.organizeHistory(tag);

      const params=new HttpParams()
      .set('api_key', this.apikey)
      .set ('limit', 10)
      .set('q',tag)

      this.http.get<SearchResponse>(`${this.url}/search`, {params})
      .subscribe(resp=>{
        this.aGifList=resp.data
        console.log(this.aGifList);
      })
    }

    console.log(this._tagsHistory);
  }
  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }

  private getLocalStorage():void{
    if (localStorage.getItem('history')){
      this._tagsHistory=JSON.parse(localStorage.getItem('history')!);
    }

  }
}
