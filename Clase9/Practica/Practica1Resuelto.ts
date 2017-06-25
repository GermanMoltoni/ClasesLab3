// Tipos
//var batman = "Bruce";
let batman:string="Bruce";
//var superman = "Clark";
let superman:string="Clark";
//var existe = false;
let existe:boolean=false;
// Tuplas
//var parejaHeroes = [batman,superman];
let parejaHeroes:[string,string] = [batman,superman];
//var villano = ["Lex Lutor",5,true];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];


// Arreglos
//var aliados = ["Mujer Maravilla","Acuaman","San", "Flash"];
let aliados:string[]=["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
// var fuerzaFlash = 5;
// var fuerzaSuperman = 100;
// var fuerzaBatman = 1;
// var fuerzaAcuaman = 0;
enum Fuerza{
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0
}

// Retorno de funciones
// function activar_batiseñal(){
//   return "activada";
// }
function activar_batiseñal():string{
  return "activada";
}

// function pedir_ayuda(){
//   console.log("Auxilio!!!");
// }
function pedir_ayuda():void{
  console.log("Auxilio!!!");
}
// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
