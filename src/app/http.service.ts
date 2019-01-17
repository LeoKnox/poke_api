import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    //this.getTasks();
    this.getPokemon();
   }
   getPokemon(){
     let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/135/');
     bulbasaur.subscribe(data => console.log ("Got our pokemon!", data, "I have " + data.abilities[0].ability.name + " but I can also " + data.moves[0].move.name + " and " + data.moves[7].move.name));
     let pokies = this._http.get('https://pokeapi.co/api/v2/ability/95/');
     console.log(pokies);
     pokies.subscribe (data => {console.log("Caught them all");
     for (var x in data.pokemon) {
       console.log(data.pokemon[x].pokemon.name);
     }
   })
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
}
