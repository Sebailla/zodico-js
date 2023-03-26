/*############################################################################################

ESTE ES UN PROGRAMA PARA OBTENER EL SIGNO DEL ZODIACO A PARTIR DE EL DÍA Y MES DE NACIMIENTO

    La interacción se realiza a través cuadros emergentes del sistema y algunos datos 
    recolectados se ,uestran también por consola.

############################################################################################*/

//Bienvenida al sistema
let bienvenida = confirm("Estas Ingresando a un mundo astrológico. \nDeseas seguir?")
console.log("Estas Ingresando a un mundo astrológico. \nDeseas seguir?");

//Confirmamos que desea seguir, si acepta => ingresa al programa, si cancela => mensaje de despedida.
if (bienvenida === true) {

    //Solicitamos Nombre para bienvenida
    let nombre = prompt("Ingresa tu nombre => ");
    alert("Bienvenido " + nombre);
    console.log("Bienvenido " + nombre);

    // Preguntamos si desea o no saber su signo
    let continuar = confirm("Deseas Saber cual es tu Signo Zodiacal?");

    //Funcion principal del programa donde con los datos de dia y mes obtenidos se selecciona el sino
    function signo(dia, mes) {

        if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) {
            alert(nombre + ", Tu signo de Zodiaco es: \n \n- ARIES -");
        }
        if ((dia >= 21 && mes === 4) || (dia <= 21 && mes === 5)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- TAURO -");
        }
        if ((dia >= 22 && mes === 5) || (dia <= 21 && mes === 6)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- GÉMINIS -");
        }
        if ((dia >= 22 && mes === 6) || (dia <= 22 && mes === 7)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- CÁNCER -");
        }
        if ((dia >= 23 && mes === 7) || (dia <= 23 && mes === 8)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- LEO -");
        }
        if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- VIRGO -");
        }
        if ((dia >= 24 && mes === 9) || (dia <= 23 && mes === 10)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- LIBRA -");
        }
        if ((dia >= 24 && mes === 10) || (dia <= 22 && mes === 11)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- ESCORPIO -");
        }
        if ((dia >= 23 && mes === 11) || (dia <= 21 && mes === 12)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- SAGITARIO -");
        }
        if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- CAPRICORNIO -");
        }
        if ((dia >= 21 && mes === 1) || (dia <= 18 && mes === 2)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- ACUARIO -");
        }
        if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
            alert(nombre + ", Tu signo de Zodiaco es \n \n- PISIS -");
        }
    }

    //Si desea conocer su signo => ejecuta la funcion y repregunta si desas conocer otro hasta que cancele
    while (continuar === true) {
        //recoleccion de datos para dia y mes
        let datoDia = true;
        let datoMes = true;
        let dia, mes;

        //Corroboramos que los datos para día sean correctos
        do {
            dia = parseInt(prompt("Dime tu DÍA de nacimiento => "));
            if (dia === null) {
                alert("Ingresa Un valor entre 1 y 31");
            } else if (dia >= 1 && dia <= 31) {
                datoDia = false;
            } else {
                alert("Ingresa Un valor entre 1 y 31");
            }

        } while (datoDia);

        //Corroboramos que los datos para mes sean correctos
        do {
            mes = parseInt(prompt("Ahora dime tu MES de nacimiento => "));
            if (mes === null) {
                alert("Ingresa Un valor entre 1 y 12");
            } else if (mes >= 1 && mes <= 12) {
                datoMes = false;
            } else {
                alert("Ingresa Un valor entre 1 y 12");
            }

        } while (datoMes);

        // ya con los datos de día y mes correctos => llamamos a la función y le pasamos los parámetros (dia y mes).
        signo(dia, mes);

        //Preguntamos si quiere Saber otro signo o si sale del sistema
        continuar = confirm(nombre + ", Deseas buscar otra fecha?");
    }

    //Mensaje de despedida
    alert("Gracias por tu visita " + nombre + ", te esperamos de nuevo pronto! Que tengas un buen día!");
    console.log("Gracias por tu visita " + nombre + ", te esperamos de nuevo pronto! Que tengas un buen día!");
    console.warn("Fin del Programa");
} else {
    alert("Gracias por tu visita, te esperamos de nuevo pronto! Que tengas un buen día!");
    console.log("Gracias por tu visita, te esperamos de nuevo pronto! Que tengas un buen día!");
    console.warn("Fin del Programa");
}