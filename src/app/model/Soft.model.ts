export class Soft{
    id?: number;
    tituloS:string;
    descripcionS:string;
    porcentajeS:number;

    constructor(tituloS: string, descripcionS:string, porcentajeS:number){
        this.tituloS=tituloS;
        this.descripcionS=descripcionS;
        this.porcentajeS=porcentajeS;
    }
}