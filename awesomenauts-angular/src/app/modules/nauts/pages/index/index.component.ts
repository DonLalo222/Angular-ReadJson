import { AUTO_STYLE } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NautIndexDTO } from '../../dto/naut-index-dto';
import { NautsService } from '../../services/nauts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  nauts: Array<NautIndexDTO> = [];
  selectedNaut: NautIndexDTO | undefined;

  constructor(private NautsService : NautsService) { }

  ngOnInit(): void {
    this.nauts = this.NautsService.getAll();
  }

  find(name: string): void{
    this.nauts.forEach(element => {
      if(element.name === name){
        this.selectedNaut = {
          name: element.name,
          description: element.description,
          difficulty: element.difficulty,
          role: element.role,
          image_url: element.image_url
        }
      }
    });
  }

}
