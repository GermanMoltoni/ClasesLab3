"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_ts_1 = require("jquery-ts");
var Usuario = (function () {
    function Usuario(nombre, apellido, estado, admin, password, turno, id) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.estado = estado;
        this.admin = admin;
        this.turno = turno;
    }
    Usuario.prototype.CrearUsuario = function () {
        jquery_ts_1.default.ajax({
            'url': './users/signup',
            'type': "POST",
            'cache': false,
            'contentType': false,
            'processData': false,
            'data': this.CrearForm(),
            headers: { 'token': getToken() }
        });
        return true;
    };
    Usuario.prototype.CrearForm = function () {
        var formData = new FormData();
        formData.append('name', this.nombre);
        formData.append('surname', this.apellido);
        formData.append('password', this.password);
        formData.append('turno', this.turno);
        formData.append('state', this.estado);
        formData.append('admin', this.admin);
        return formData;
    };
    return Usuario;
}());
