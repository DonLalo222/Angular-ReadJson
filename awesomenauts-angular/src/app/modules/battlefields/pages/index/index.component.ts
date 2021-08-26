import { Component, OnInit } from '@angular/core';
import { Battlefield } from '../../interfaces/battlefield';
import { BattlefieldsService } from '../../services/battlefields.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  battlefields: Array<Battlefield> | undefined;

  constructor(private battlefieldService: BattlefieldsService) {

   }

  ngOnInit(): void {
    this.battlefields = this.battlefieldService.getAll();
  }


}
