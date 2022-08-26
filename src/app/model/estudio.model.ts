
export class Estudio {
    id?: number;
    nivel: string;
    institucion: string;
    titulo: string;
    desde: string;
    hasta: string;
    estado: string;
    imgest: string;

    constructor(nivel: string, institucion: string, titulo: string, desde: string, hasta: string, estado: string, imgest: string) {
        this.nivel = nivel;
        this.institucion = institucion;
        this.titulo = titulo;
        this.desde = desde;
        this.hasta = hasta;
        this.estado = estado;
        this.imgest = imgest;
    }
}