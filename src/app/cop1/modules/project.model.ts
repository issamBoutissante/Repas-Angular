export class projet {
    nom_etudiant:string;
    projet:string;
    societe:string;
    Note:number;
    photo:string;
    constructor(nom_etudiant:string,projet:string,societe:string,note:number,photo:string){
        this.nom_etudiant=nom_etudiant;
        this.projet=projet;
        this.societe=societe;
        this.Note=note;
        this.photo=photo;
    }
}
