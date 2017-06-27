var MAIN = (function (DATA) {

  var lib = {};

  /*
    realizar las operaciones usando los metosos map,  reduce y filter y combinaciones entre ellos
  */

  // Retornar una array de strings (el nombre de los usarios de sexo femenino)
  lib.femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .map(function (user) {
        return user.name;
      });
  };

  // Retornar una array de strings (el email de los usarios de sexo masculino)
  lib.maleUsersEmails = function () {
      return DATA
      .filter(function (user) {
        return user.gender === 'male';
      })
      .map(function (user) {
        return user.email;
      });
  };

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
    return DATA
      .filter(function (user) {
        return user.age > age;
      })
      .map(function (user) {
        return {name:user.name,email:user.email,age:user.age};
      });
  };

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function () {
      return DATA.map(function(user){
        return user.name+' '+user.age;
      });
  };

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function () {
    var indexA;
    var number = DATA.reduce(function(anterior,actual,index){
        indexA=index;
        return anterior + actual.age;
    },0);
    return parseFloat(number)/(indexA+1);
  };

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function () {
    var indexA;
    var number= DATA.filter(function (user) {
        return user.gender === 'male';
      })
    .reduce(function(anterior,actual,index){
        indexA=index;
        return anterior + actual.age;
    },0);
    return parseFloat(number)/(indexA+1);
  };

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function () {
   var indexA;
    var number= DATA.filter(function (user) {
        return user.gender === 'female';
      })
    .reduce(function(anterior,actual,index){
        indexA=index;
        return anterior + actual.age;
    },0);
    return parseFloat(number)/(indexA+1);
  };

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function () {

  };

  return lib;

})(DATA);


console.log(MAIN.femaleUsers());
console.log(MAIN.maleUsersEmails());
console.log(MAIN.userOlderThan(40));
console.log(MAIN.olderUser());
console.info(MAIN.userAgeAverage());
console.log(MAIN.userMaleAgeAverage());
console.log(MAIN.userFemaleAgeAverage());

