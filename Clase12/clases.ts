class Motor{
    private potencia:number;
    private tipo:string;
    constructor(potencia:number,tipo:string){
        this.potencia = potencia;
        this.tipo= tipo;
    }
    encender(callback:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }
    apagar(callback:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }
}

class Accesorio{
    private id:number;
    private nombre:string;
    constructor(id:number,nombre:string){
        this.id=id;
        this.nombre=nombre;
    }


}

class Vehiculo{
    private _precioBase:number;
    private _motor:Motor;
    marca:string;
    modelo:string;
    private listaAccesorios:Accesorio[];
    constructor(precioBase:number,motor:Motor,marca:string,modelo:string,listaAccesorios:Accesorio[]){
        this._precioBase=precioBase;
        this.listaAccesorios=listaAccesorios;
        this._motor=motor;
        this.marca=marca;
        this.modelo=modelo;
    }
    get PrecioBase():number{
        return this._precioBase;
    }
    get Motor():Motor{
        return this._motor;
    }
    set PrecioBase(precio:number){
        this._precioBase=precio;
    }
    get ListaAccesorios():Accesorio[]{
        return this.listaAccesorios;
    }
    set ListaAccesorios(listaAccesorios:Accesorio[]){
        this.listaAccesorios=listaAccesorios;
    }
    calcularPrecioTotal(){
        return this.PrecioBase*1.08;
    }
    agregarAccesorios(...accesorios: Accesorio[]){
        this.listaAccesorios= this.listaAccesorios.concat(accesorios);
    }

}

class Camion extends Vehiculo{
    largo:string;
    cuatroXcuatro:boolean;
    constructor(precioBase:number,motor:Motor,marca:string,modelo:string,listaAccesorios:Accesorio[],largo:"corto"|"mediano"|"largo",cuatroXcuatro:boolean){
        super(precioBase,motor,marca,modelo,listaAccesorios);
        this.largo=largo;
        this.cuatroXcuatro=cuatroXcuatro;

    }
}


window.onload = function () {
    let motor:Motor=new Motor(250,"Naftero");
    let accesorio1:Accesorio = new Accesorio(1,"llave");
    let accesorio2:Accesorio = new Accesorio(2,"tablero");
    let camion:Camion = new Camion(123456,motor,"Mercedes Benz","2014",[accesorio1,accesorio2],"corto",true);
    let accesorio3:Accesorio = new Accesorio(3,"llanta derecha");
    let accesorio4:Accesorio = new Accesorio(4,"llanta izquierda");
    camion.agregarAccesorios(accesorio3,accesorio4);
    camion.Motor.encender(function(estado:true,tipo:'asdsad'):void{console.log("Prendido")});
    console.log(camion.ListaAccesorios);
    console.log(camion.calcularPrecioTotal());
        camion.Motor.apagar(function(estado:true,tipo:'asdsad'):void{console.log("Apago")});

	//3)encender el camión mostrando que se encendió por pantalla.
 
 
	//6)Apagar el motor mostrando que se apagó por pantalla.
};
