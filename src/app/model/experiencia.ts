export class Experiencia {
    id?: number;
    empresaE:string;
    cargoE:string;
    desdeE:string;
    hastaE:string;
    domicilioE:string;
    descripcionE:string;
    imgE:string;
    constructor (empresaE: string,cargoE: string, desdeE: string, hastaE: string, domicilioE: string, descripcionE: string, imgE:string){
        this.empresaE=empresaE;
        this.cargoE = cargoE;
        this.desdeE = desdeE;
        this.hastaE = hastaE;
        this.domicilioE = domicilioE;
        this.descripcionE = descripcionE;
        this.imgE=imgE;
    }

}
