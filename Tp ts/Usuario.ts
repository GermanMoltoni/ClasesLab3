import $ from 'jquery-ts';
class Usuario{
    private id?:string;
    private nombre:string;
    private apellido:string;
    private password?:string;
    private estado:string;
    private admin:string;
    private turno?:string;
    constructor(nombre:string,apellido:string,estado:string,admin:string,password?:string,turno?:string,id?:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.password=password;
        this.estado=estado;
        this.admin=admin;
        this.turno=turno;
    }
    public CrearUsuario():boolean{
        $.ajax({
                'url':'./users/signup',
                'type':"POST",
                'cache': false,
                'contentType': false,
                'processData': false,
                'data':this.CrearForm(),
            headers:{'token':getToken()}
            })
        return true;
    }
    private CrearForm():any{
        let formData = new FormData();
        formData.append('name',this.nombre);
        formData.append('surname',this.apellido);
        formData.append('password',this.password);
        formData.append('turno',this.turno);
        formData.append('state',this.estado);
        formData.append('admin',this.admin);
        return formData;
    }
    
}