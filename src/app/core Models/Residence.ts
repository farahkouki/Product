export class Residence {
    id!: number;
    name!:string;
    address!:string;
    image!:string;
    status!:string
    isFavorite?: boolean; // Propriété pour suivre si c'est un favori
}