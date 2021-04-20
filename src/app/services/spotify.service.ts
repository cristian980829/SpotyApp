import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  //Se importan los servicion automaticamente, son detectados y ya no deben ser importados en el app.module
  providedIn: 'root' 
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

  }

  getQuery( query:string ){
    const url=`https://api.spotify.com/v1/${query}`;
  
    const headers= new HttpHeaders( {
      'Authorization': 'Bearer BQCiNylLDmrOU7RDJchUZV7UJwkQwtTbfHuPfIhoEIEpyKRr_RhD6YQFvza6EiemJGVtY6NMFjkzGXnCtrk'
    } );

    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=50')
                    .pipe(map( data=> data['albums'].items ));
    
  }

  getArtistas( termino:string ){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
                    .pipe(map( data=> data['artists'].items ));

  }

  getArtista( id:string ){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id:string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map( data=> data['tracks']));
  }
}
