import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  
  artistas:any[]=[];
  loading:boolean
  info:boolean;

  constructor( private spotify: SpotifyService ) { 
    
  }
    
    buscar(termino:string){
      this.loading=true;
      if(termino){
        this.spotify.getArtistas(termino)
        .subscribe( (data:any) =>{
          this.artistas=data;
      
        if(data.length<=0){
          this.info=true;
        }else{
          this.info=false;
        }

        this.loading=false;

        console.log(data);
        })

      }
    }

}
