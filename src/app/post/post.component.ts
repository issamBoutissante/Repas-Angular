import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  image!:string;
  commentaire!:string;
  isJaime:boolean=false;
  isJaimePas:boolean=false;
  ngOnInit(): void {
      this.image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
      this.commentaire="Hi ,This is my profile picture"
  }
  jaime():void{
    this.isJaime=true;
    this.isJaimePas=false;
  }
  jaimePas():void{
    this.isJaimePas=true;
    this.isJaime=false;
  }
}
