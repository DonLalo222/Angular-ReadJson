import { Injectable } from '@angular/core';
import * as data from '../data/nauts.json';
import { NautIndexDTO } from "../dto/naut-index-dto";

@Injectable({
  providedIn: 'root'
})
export class NautsService {

  nauts: Array<NautIndexDTO> = [];
  collection: any = data;

  constructor() { }

   getAll(){
    for(let naut in this.collection.nauts){
      //
      let item = {} as NautIndexDTO;
      item.description = this.collection.nauts[naut].description;
      item.difficulty = this.collection.nauts[naut].difficulty;
      item.image_url = this.collection.nauts[naut].image_url;
      item.name = this.collection.nauts[naut].name;
      item.role = this.collection.nauts[naut].role;
      //
      this.nauts.push(item);
    }
    return this.nauts;
  }
}
