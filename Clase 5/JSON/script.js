/*
    json -> [
                {'var1':1,'var2':2,'var3':"var"},
                {'var1':42,'var2':34,'var3':"var2"}
            ]
    Envio de datos de cliente a servidor:
            var obj = {'nombre':"carlos",'apellido':"Gomez",'legajo':34233};
            var myJSON = json.stringify(obj);// transforma un obj de js a texto y se manda con request
    Recibir de datos de servidor a cliente:
            var myJson = {'nombre':"carlos",'apellido':"Gomez",'legajo':34233};
            var myObj = json.parse(myJson);
 */