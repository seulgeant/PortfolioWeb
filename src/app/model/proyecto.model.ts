export class Proyecto {
    id?: number;
    nombreP: string;
    fechaP: string;
    descripcionP: string;
    url: string;
    empresaP: string;

    constructor(nombreP: string, fechaP: string, descripcionP: string, url: string, empresaP: string) {
        this.nombreP = nombreP;
        this.fechaP = fechaP;
        this.descripcionP = descripcionP;
        this.url = url;
        this.empresaP = empresaP;
    }

}