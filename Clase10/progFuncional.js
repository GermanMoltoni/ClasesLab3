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
console.log(edad);


var 