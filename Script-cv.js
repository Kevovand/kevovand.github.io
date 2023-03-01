let foto, nombre, apellido, genero, identificacion, nroIdentificacion, pais, provincia, ciudad, calle, numero, codPostal;
let correoElect, fechaNac, edad, telMovil, telFijo, seed;


$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
        /**
         * console.log(data.results[0]);
         */

        foto = data.results[0].picture.large;
        apellido= data.results[0].name.last;
        nombre = data.results[0].name.first;

        identificacion = data.results[0].id.name;
        nroIdentificacion = data.results[0].id.value;
        fechaNac = data.results[0].dob.date;
        edad = data.results[0].dob.age;
        pais = data.results[0].location.country;
        provincia = data.results[0].location.state;
        ciudad = data.results[0].location.city;
        calle = data.results[0].location.street.name;
        numeroCalle = data.results[0].location.street.number;
        codPostal = data.results[0].location.postcode;
        correoElect = data.results[0].email;
        telMovil = data.results[0].cell;
        telFijo = data.results[0].phone;

        fotoPerfil.src=foto;
        apellidoPersona.innerText=apellido;
        nombrePersona.innerText=nombre;

        identificacionPersona.innerText=identificacion + "  " + nroIdentificacion;
        nacimientoPersona.innerText=fechaNac +" ("+edad+" Años)";
        residenciaPersona.innerText=ciudad+", "+provincia+", "+pais;
        callePersona.innerText=calle +" "+numeroCalle;
        codPostPersona.innerText=codPostal;
        correoElectPersona.innerText=correoElect;
        telMovilPersona.innerText=telMovil;
        telFijoPersona.innerText=telFijo;

        seed = data.info.seed;
        
    }
});