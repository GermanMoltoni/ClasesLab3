// Funciones Básicas
function sumar(a:number, b:number ):number{
  return a + b;
}

var contar:(heroes:string[])=>number = function(heroes:string[]):number{
  return heroes.length;
}
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
let cantidad:number=contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean=false ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada(numero:number,texto:string,booleano:boolean,arreglo:any[]):void{

}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(numero:number,texto:string,booleano:boolean,arreglo:any[])=>void;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(123,"nohacenada",false,[123,123]);