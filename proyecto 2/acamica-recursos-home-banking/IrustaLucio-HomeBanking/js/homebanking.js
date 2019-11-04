//Declaración de variables
var nombreUsuario = "Lucio Irusta";
var saldoCuenta = 2000;
var limiteExtraccion = 1000;
var codSeg = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(montoASumar) {
    //  var montoASumar = prompt("Ingresó: ", montoASumar);
    saldoCuenta = parseInt(saldoCuenta) + parseInt(montoASumar);
    //console.log("Saldo añadido");


}

function restarDinero(montoARestar) {
    //var montoARestar = prompt("Ingresó: ", montoARestar);
    saldoCuenta = parseInt(saldoCuenta) - parseInt(montoARestar);
    // console.log("Saldo restado");
}

function cambiarLimiteDeExtraccion(nuevoLimite) {


    var nuevoLimite = parseInt(prompt("Ingrese el nuevo limite de extracion de dinero: "));
    if (nuevoLimite) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("El nuevo limite de extraccion es: " + nuevoLimite);
    } else { alert("Error, intente ingresar el limite nuevamente.") }

}

function extraerDinero(montoAExtraer) {

    var montoAnterior = saldoCuenta;
    var stringMontoAExtraer = prompt("Ingrese la cantidad de dinero que desea extraer: ");
    var montoAExtraer = parseInt(stringMontoAExtraer);

    if (esMultiploDe100(montoAExtraer)) {
        if (montoAExtraer <= limiteExtraccion) {
            if (montoAExtraer <= saldoCuenta) {

                restarDinero(montoAExtraer);

                alert("Dinero retirado: " + montoAExtraer + "\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta);
                actualizarSaldoEnPantalla();

            } else { alert("Error, está intentando retirar un monto mayor al que posee.") }

        } else { alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.") }

    } else {
        alert("Solo puedes extraer billetes de 100.")
    }
}

function esMultiploDe100(cantDinero) {
    if (cantDinero % 100 === 0) {
        return true;
    } else { return false; }
}

function depositarDinero(montoADepositar) {
    var montoAnterior = saldoCuenta;
    var stringMontoADepositar = prompt("Ingrese la cantidad de dinero que desea depositar: ");
    var montoADepositar = parseInt(stringMontoADepositar);

    if (montoADepositar) {
        sumarDinero(montoADepositar);
        actualizarSaldoEnPantalla();
        alert("Dinero depositado: " + montoADepositar + "\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta);

    } else(alert("Ha cancelado el deposito de dinero."))


}

function pagarServicio() {
    var montoAnterior = saldoCuenta;
    var Agua = 350;
    var Telefono = 425;
    var Luz = 210;
    var Internet = 570;
    var servicio = prompt("Ingrese el número que corresponda con el servicio que queres pagar: \n1 - Agua \n2 - Teléfono \n3 - Luz \n4 - Internet");

    switch (servicio) {
        case "1":
            if (saldoCuenta >= Agua) {
                saldoCuenta = parseInt(saldoCuenta) - parseInt(Agua);

                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Agua\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta)
            } else { alert("No tiene dinero suficiente para efectuar este pago.") }

            break;

        case "2":
            if (saldoCuenta >= Telefono) {
                saldoCuenta = parseInt(saldoCuenta) - parseInt(Telefono);
                alert("Has pagado el servicio de Telefono\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta)
                actualizarSaldoEnPantalla();
            } else { alert("No tiene dinero suficiente para efectuar este pago.") }
            break;

        case "3":
            if (saldoCuenta >= Luz) {
                saldoCuenta = parseInt(saldoCuenta) - parseInt(Luz);
                alert("Has pagado el servicio Luz\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta)
                actualizarSaldoEnPantalla();
            } else { alert("No tiene dinero suficiente para efectuar este pago.") }
            break;

        case "4":
            if (saldoCuenta >= Internet) {
                saldoCuenta = parseInt(saldoCuenta) - parseInt(Internet);
                alert("Has pagado el servicio Internet\n Saldo anterior: " + montoAnterior + "\n Saldo actual: " + saldoCuenta)
                actualizarSaldoEnPantalla();
            } else { alert("No tiene dinero suficiente para efectuar este pago.") }
            break;
        default:
            alert("Ingrese un numero del 1 al 4 para efectuar pagos");
    }

}

function transferirDinero() {


    var montoAnterior = saldoCuenta;
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;

    var montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir: "));

    if (montoATransferir) {

        if (montoATransferir <= montoAnterior) {
            var nroCuenta = prompt("Ingrese el numero de cuenta al que desea transferir el dinero: ")
            if (parseInt(nroCuenta) === parseInt(cuentaAmiga1) || parseInt(nroCuenta) === parseInt(cuentaAmiga2)) {

                saldoCuenta = saldoCuenta - montoATransferir;
                actualizarSaldoEnPantalla();
                alert("Se han transferido: " + montoATransferir + "\nCuenta destino: " + nroCuenta);

            } else { alert("Ingrese un numero de cuenta amiga válido.") }


        } else { alert("No tiene dinero suficiente para realizar esta transferencia o no ingreso un dato correcto.") }
    } else { alert("Error, intente nuevamente") }
}

function iniciarSesion() {
    var codInicio = parseInt(prompt("Ingrese el codigo de seguridad de su cuenta: "));

    if (codInicio) {
        if (parseInt(codInicio) === parseInt(codSeg)) {
            alert("Bienvenido " + nombreUsuario);

        } else {
            alert("Codigo incorrecto: su dinero ha sido retenido por cuestiones de seguridad")
            saldoCuenta = 0;
            actualizarSaldoEnPantalla();
        }
    } else {
        (alert("Error, por favor presione f5 para volver a ingresar, su dinero ha sido retenido por cuestiones de seguridad"));
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();

    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}