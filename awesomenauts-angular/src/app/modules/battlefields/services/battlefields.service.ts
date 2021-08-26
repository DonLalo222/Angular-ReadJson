import { Injectable } from '@angular/core';
import * as data from '../data/battlefields.json'
import { Battlefield } from '../interfaces/battlefield';

@Injectable({
  providedIn: 'root'
})
export class BattlefieldsService {

  collection: any = data;
  battlefields: Array<Battlefield> = [];

  constructor() { }

  getAll(){
    for(let bf in this.collection.battlefields){
      let item = {} as Battlefield;
      item.name = this.collection.battlefields[bf].name;
      item.creep = this.collection.battlefields[bf].creep;
      item.description = this.collection.battlefields[bf].description;
      item.hazard = this.collection.battlefields[bf].hazard;
      item.hazard_text = this.collection.battlefields[bf].hazard_text;
      item.map = this.collection.battlefields[bf].map;
      item.splash_art = this.collection.battlefields[bf].splash_art;
      //
      this.battlefields.push(item);
    }
    return this.battlefields;
  }
}
