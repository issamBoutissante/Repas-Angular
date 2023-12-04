export class repas{
    nbrLikes:number=0;
    nbrDislikes:number=0;
    comments:string[]=[];
    currentComment:string='';
    constructor(public nom:string,public prix:number,public image:string){}
    like=()=>this.nbrLikes++;
    dislike=()=>this.nbrDislikes++;
    addComment(){
        this.comments.push(this.currentComment);
        this.currentComment='';
    }
}