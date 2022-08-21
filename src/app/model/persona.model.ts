export class persona{
id?: number;
nombre: String;
apellido: String;
img:String;
nacimiento:String;
dni:String;
cuil:String;
civil:String;
hijos:number;
domicilio:String;
telefono:String;
correo:String;
titulo:String;
acercade:String



constructor (nombre: String, apellido:String, img:String,nacimiento:String, dni:String,cuil:String,civil:String,hijos:number,domicilio:String,telefono:String,correo:String,titulo:String,acercade:String ){
    this.nombre=nombre;
    this.apellido=apellido;
    this.img=img;
    this.nacimiento=nacimiento;
    this.dni=dni;
    this.cuil=cuil;
    this.civil=civil;
    this.hijos=hijos;
    this.domicilio=domicilio;
    this.telefono=telefono;
    this.correo=correo;
    this.titulo=titulo;
    this.acercade=acercade;

}

}