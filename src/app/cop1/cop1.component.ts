import { Component,OnInit,Input } from '@angular/core';
import {projet} from "./modules/project.model"

@Component({
  selector: 'app-cop1',
  templateUrl: './cop1.component.html',
  styleUrl: './cop1.component.scss'
})
export class Cop1Component  implements OnInit{
  @Input() Projet!:projet;
  ngOnInit(){
    this.Projet=new projet("Mazzouz","Gestion de commande","Microsoft",20,"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png")
  }
  jaime(){
    this.Projet.Note++;
  }
}
