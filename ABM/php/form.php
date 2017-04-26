<?php

 echo '
 <div class="form-group col-md-4 col-sm-4">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" placeholder="Juan" tabindex="1" id="nombre" name="nombre">
            </div>
            <div class="form-group col-md-4 col-sm-4">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" placeholder="Gomez" tabindex="2" id="apellido" name="apellido">
            </div>
            <div class="form-group col-md-4 col-sm-4">
                <label for="dni">Dni</label>
                <input class="form-control" type="text" placeholder="22.222.222" id="dni" name="dni">
            </div>
            <div class="form-group  col-md-2 col-sm-3">  <br>  
                <label for="sexo">Sexo:</label>
                <label class="radio-inline form-check-label">    <input class="form-control" type="radio" name="sexo" id="masculino" value="masculino">M</label>
                <label class="radio-inline form-check-label"> <input class="form-control" type="radio" name="sexo" id="femenino" value="femenino">F</label>
             </div>
             <div class="form-group col-md-3 col-sm-2"> 
                <label for="legajo">Legajo</label>
                <input type="text"  class="form-control" id="legajo" name="legajo">
            </div>
            <div class="form-group col-md-3 col-sm-3">
                <label for="sueldo">Sueldo</label>
                <input type="text" class="form-control" id="sueldo" name="sueldo">
            </div>
            <div class="form-group col-md-4 col-sm-4">
                <label for="foto">Imagen</label>
                <input type="hidden" name="MAX_FILE_SIZE" value="1024000" />
                <input type="file" class="form-control" accept="image/*" id="file" name="foto"><br>
            </div>
            <div class="btn-group col-md-2 col-sm-2">
            <button type="submit" class="form-control btn btn-success" name="alta" id="btnAdd" value="add">Add</button>
            </div>
 
 
 
 
 
 
 
 
 
 ';

?>