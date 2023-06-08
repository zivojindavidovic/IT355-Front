import { Optional } from "@angular/core";

export class Destination{
    id: number;
    destination: string;
    image: string;

    constructor (@Optional() id: number, destination:string, image:string){
        this.id = id;
        this.destination = destination;
        this.image = image;
    }
}
