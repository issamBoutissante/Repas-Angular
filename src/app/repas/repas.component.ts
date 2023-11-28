import { Component,Input } from '@angular/core';
import { repas } from './models/repas.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrl: './repas.component.scss'
})
export class RepasComponent {
  repas:repas[]=[]
  constructor(){
    this.repas.push(new repas('Pizza',10,'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'));
    this.repas.push(new repas('Pasta',12,'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg'));
    this.repas.push(new repas('Couscous',15,'https://media.istockphoto.com/id/538643808/photo/raw-organic-french-couscous.jpg?s=612x612&w=0&k=20&c=zX_kSHNtm3e2GDxYcQqkoCLioxEFcuBaGrmbb5EtsiA='));
    this.repas.push(new repas('Salade',8,'https://assets.afcdn.com/recipe/20190704/94666_w1024h768c1cx2689cy1920cxt0cyt0cxb5378cyb3840.webp'));
    this.repas.push(new repas('Sandwich',6,'https://media.istockphoto.com/id/157431311/photo/turkey-sandwich.jpg?s=612x612&w=0&k=20&c=uB6byErFAnWxFkkAqMiGNRJGE8r3nqsSDdqrfBE8HOA='));
    this.repas.push(new repas('Hamburger',9,'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-260nw-2282033179.jpg'));
  }
}
