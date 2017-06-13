var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Motor = (function () {
    function Motor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    Motor.prototype.encender = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    Motor.prototype.apagar = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    return Motor;
}());
var Accesorio = (function () {
    function Accesorio(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Accesorio;
}());
var Vehiculo = (function () {
    function Vehiculo(precioBase, motor, marca, modelo, listaAccesorios) {
        this._precioBase = precioBase;
        this.listaAccesorios = listaAccesorios;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
    }
    Object.defineProperty(Vehiculo.prototype, "PrecioBase", {
        get: function () {
            return this._precioBase;
        },
        set: function (precio) {
            this._precioBase = precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "Motor", {
        get: function () {
            return this._motor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "ListaAccesorios", {
        get: function () {
            return this.listaAccesorios;
        },
        set: function (listaAccesorios) {
            this.listaAccesorios = listaAccesorios;
        },
        enumerable: true,
        configurable: true
    });
    Vehiculo.prototype.calcularPrecioTotal = function () {
        return this.PrecioBase * 1.08;
    };
    Vehiculo.prototype.agregarAccesorios = function () {
        var accesorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accesorios[_i] = arguments[_i];
        }
        this.listaAccesorios = this.listaAccesorios.concat(accesorios);
    };
    return Vehiculo;
}());
var Camion = (function (_super) {
    __extends(Camion, _super);
    function Camion(precioBase, motor, marca, modelo, listaAccesorios, largo, cuatroXcuatro) {
        var _this = _super.call(this, precioBase, motor, marca, modelo, listaAccesorios) || this;
        _this.largo = largo;
        _this.cuatroXcuatro = cuatroXcuatro;
        return _this;
    }
    return Camion;
}(Vehiculo));
window.onload = function () {
    var motor = new Motor(250, "Naftero");
    var accesorio1 = new Accesorio(1, "llave");
    var accesorio2 = new Accesorio(2, "tablero");
    var camion = new Camion(123456, motor, "Mercedes Benz", "2014", [accesorio1, accesorio2], "corto", true);
    var accesorio3 = new Accesorio(3, "llanta derecha");
    var accesorio4 = new Accesorio(4, "llanta izquierda");
    camion.agregarAccesorios(accesorio3, accesorio4);
    camion.Motor.encender(function (estado, tipo) { console.log("Prendido"); });
    console.log(camion.ListaAccesorios);
    console.log(camion.calcularPrecioTotal());
    camion.Motor.apagar(function (estado, tipo) { console.log("Apago"); });
    //3)encender el camión mostrando que se encendió por pantalla.
    //6)Apagar el motor mostrando que se apagó por pantalla.
};
