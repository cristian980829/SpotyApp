import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  
  @Input() items:any[]=[];

  constructor( private router:Router ) { }

  verArtista( item:any ){
    let artisatId;

    if( item.type==='artist' ){
      artisatId=item.id;
    }else{
      artisatId=item.artists[0].id;
    }

    this.router.navigate(['/artist',artisatId]);
  }

}
