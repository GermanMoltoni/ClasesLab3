var mascotas = [
    {'nombre':'huesos',
    'edad':2
},
    {'nombre':'pancho',
    'edad':3
},
    {'nombre':'bob',
    'edad':4
}
];





var nombre = mascotas.map(function(mascotas){
    return mascotas.nombre;
});


console.log(nombre);



var mayoresDeDos = mascotas.filter(function(mascotas){
    return mascotas.edad > 2;
});
console.log(mayoresDeDos);

var numeros = [1,2,4,3];
var reduce = numeros.reduce(function(elemAnterior,elemActual){
    return elemAnterior + elemActual;
});
console.log(reduce);