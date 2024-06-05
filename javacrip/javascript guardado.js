var Juegos = []
Juegos.push(new juegos("64420", "A hat in time", "Gears for breakfast", "Unreal engine 3", "Jonas Kaerlev", "Plataformas",
    "si", "2014", "39", "Ingles", "si", "Adolecentes"))


function listarCampos() {
    var filas = "";
    for (let i = 0; i < Juegos.length; i++) {
        var c = Juegos[i];
        filas = filas + "<tr>";
        filas = filas + "<td>" + c.codigo .toUpperCase() + "</td>";
        filas = filas + "<td>" + c.nombre.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.compañia.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.motor.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.creador.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.categoria.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.online.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.fecha.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.precio.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.idiomas.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.multijugador.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.clasificacion.toUpperCase() + "</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}
document.addEventListener("DOMContentLoaded", function () { listarCampos() });

function limpiarCampos(x) {
    if (x === 1) {
        document.getElementById("txtca1").value = "";
    }
    document.getElementById("txtca2").value = "";
    document.getElementById("txtca4").value = "";
    document.getElementById("txtca3").value = "";
    document.getElementById("txtca5").value = "";
    document.getElementById("cboca6").value = "";
    document.getElementById("opsi").checked = true;
    document.getElementById("txtca8").value = "";
    document.getElementById("txtca9").value = "";
    document.getElementById("cboca10").value = "";
    document.getElementById("opsip").checked = true;
    document.getElementById("cbca12").value = "";
}

function consultar() {
    var ca1 = document.getElementById("txtca1").value;
    if (ca1.trim().length < 1 || ca1.trim().length > 5) {
        alert("Debe digitar un codigo  para buscar!");
        document.getElementById("txtca1").value = "";
        document.getElementById("txtca1").focus();
    } else {
        let sw = 0;
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if (ca1 === c.codigo ) {
                sw = 1;
                document.getElementById("txtca2").value = c.nombre;
                document.getElementById("txtca4").value = c.motor;
                document.getElementById("txtca3").value = c.compañia;
                document.getElementById("txtca5").value = c.creador;
                document.getElementById("cboca6").value = c.categoria;
                if (c.online === "NUEVO") {
                    document.getElementById("opsi").checked = true;
                } else {
                    document.getElementById("opno").checked = true;
                }
                document.getElementById("txtca8").value = c.fecha;
                document.getElementById("txtca9").value = c.precio;
                document.getElementById("cboca10").value = c.idiomas;
                if (c.multijugador === "si") {
                    document.getElementById("opsip").checked = true;
                } else {
                    document.getElementById("opnop").checked = true;
                }
                document.getElementById("cbca12").value = c.clasificacion;
            }
        }
        var msg = "";
        if (sw === 0) {
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>codigo  no encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        } else if (sw === 1) {
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>codigo  encontrado</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El codigo  debe ser de 1 a 5 caracteres! \n";
    } else {
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if (ca1 === c.codigo ) {
                errores += "El juegos ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if (ca2.trim().length < 1 || ca2.trim().length > 30) {
        errores += "El nombre debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 1 || ca4.trim().length > 30) {
        errores += "La motor debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 1 || ca3.trim().length > 30) {
        errores += "El compañia debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "La juegos 5 debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca6.trim().length === 0) {
        errores += "Debe ingresar el categoria! \n";
    }

    if (ca8.trim().length <= 0) {
        errores += "La cantidad de digitos del juegos 8 debe ser mayor a 0\n";
    }

    if (ca9.trim().length <= 0) {
        errores += "El precio debe ser mayor a 0\n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar una opccion de idiomas! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar una opcion! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var c = new juegos(ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10, ca11, ca12);
        Juegos.push(c);

        var msg = "";
        msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
        msg += "<strong> registrado correctamente!</strong>";
        msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
        msg += "</div>";
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}


function modificar() {
    var ca1 = document.getElementById("txtca1").value.toUpperCase();
    var ca2 = document.getElementById("txtca2").value.toUpperCase();
    var ca3 = document.getElementById("txtca3").value.toUpperCase();
    var ca4 = document.getElementById("txtca4").value.toUpperCase();
    var ca5 = document.getElementById("txtca5").value.toUpperCase();
    var ca8 = document.getElementById("txtca8").value.toUpperCase();
    var ca9 = document.getElementById("txtca9").value.toUpperCase();
    var ca6 = document.getElementById("cboca6").value.toUpperCase();
    var ca10 = document.getElementById("cboca10").value.toUpperCase();
    var ca12 = document.getElementById("cbca12").value.toUpperCase();

    var ca7 = "";
    if (document.getElementById("opsi").checked) {
        ca7 = "si";
    } else {
        ca7 = "no";
    }

    var ca11 = "";
    if (document.getElementById("opsip").checked) {
        ca11 = "si";
    } else {
        ca11 = "no";
    }

    var errores = "";
    if (ca1.trim().length === 0 || ca1.trim().length > 5) {
        errores += "El código debe ser de 1 a 5 caracteres! \n";
    } else {
        let x = 0;
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if (ca1 === c.codigo ) {
                x = 1;
                break;
            }
        }
        if (x === 0) {
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if (ca2.trim().length < 5 || ca2.trim().length > 30) {
        errores += "El nombre debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca3.trim().length < 5 || ca3.trim().length > 30) {
        errores += "El título debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca4.trim().length < 5 || ca4.trim().length > 30) {
        errores += "La motor debe contener entre 5 y 30 caracteres! \n";
    }

    if (ca5.trim().length < 1 || ca5.trim().length > 30) {
        errores += "La edición debe contener entre 1 y 30 caracteres! \n";
    }

    if (ca8.trim().length === 0 || ca8 <= 0) {
        errores += "El número de páginas debe ser un número positivo! \n";
    }

    if (ca9.trim().length === 0 || ca9 <= 0) {
        errores += "El precio debe ser un número positivo! \n";
    }

    if (ca10.trim().length === 0) {
        errores += "Debe ingresar el país de idiomas! \n";
    }

    if (ca12.trim().length === 0) {
        errores += "Debe ingresar el género! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var sw = 0;
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if (ca1 === c.codigo ) {
                var x = confirm("Desea modificar el registro?");
                if (x === true) {
                    sw = 1;
                    Juegos[i].nombre = ca2;
                    Juegos[i].compañia = ca3;
                    Juegos[i].motor = ca4;
                    Juegos[i].creador = ca5;
                    Juegos[i].categoria = ca6;
                    Juegos[i].online = ca7;
                    Juegos[i].fecha = ca8;
                    Juegos[i].precio = ca9;
                    Juegos[i].idiomas = ca10;
                    Juegos[i].multijugador = ca11;
                    Juegos[i].clasificacion = ca12;
                    break;
                } else {
                    sw = 2;
                }
            }
        }

        var msg = "";
        if (sw === 0) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 1) {
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> modificado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 2) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El  no fue modificado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}

function eliminar(){
    var ca1 = document.getElementById("txtca1").value.toUpperCase();

    var errores = "";
    if(ca1.trim().length < 1 || ca1.trim().length > 5){
        errores += "El código debe contener entre 1 y 5 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if(ca1 === c.codigo ){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < Juegos.length; i++) {
            var c = Juegos[i];
            if(ca1 === c.codigo ){
                var x = confirm("Desea eliminar el registro?");
                if(x === true){
                    sw = 1;
                    Juegos.splice(i, 1);
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong> no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 1){
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong> eliminado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }else if(sw === 2){
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El  no fue eliminado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarCampos();
        limpiarCampos();
    }
}