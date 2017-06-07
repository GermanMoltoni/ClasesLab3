
// Objetos
/*var batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};*/
type auto={carroceria:string,modelo:string,antibalas:boolean,pasajeros:number,disparar?:()=>void};
let batimovil:auto={
  carroceria:"negra",
  modelo:"6x6",
  antibalas:true,
  pasajeros:4
};

/*var bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};*/
let bumblebee:auto={
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

// Villanos debe de ser un arreglo de objetos personalizados

/*var villanos = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];*/
let villanos:{nombre:string,edad:number | undefined,mutante:boolean}[]=
 [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];


// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
/*var charles = {
  poder:"psiquico",
  estatura: 1.78
};*/
type charl = {poder:string,estatura:number}; 
let charles:charl= {
  poder:"psiquico",
  estatura: 1.78
};
/*var apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}*/
type apoca ={lider:boolean,miembros:string[]};
let apocalipsis:apoca={
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
//var mystique;
let mystique:charl | apoca;
mystique = charles;
mystique = apocalipsis;
