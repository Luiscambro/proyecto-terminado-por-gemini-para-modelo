const texto = "Desarrollador Web Freelancer";
const maquina = document.getElementById("maquina");

let posicion = 0;

function escribir() {
    if (posicion < texto.length) {
        maquina.textContent += texto.charAt(posicion);
        posicion++;
        setTimeout(escribir, 80);
    } else {
        setTimeout(borrar, 1000); // espera 1 segundo y borra
    }
}

function borrar() {
    if (maquina.textContent.length > 0) {
        maquina.textContent = maquina.textContent.slice(0, -1);
        setTimeout(borrar, 50);
    } else {
        posicion = 0;          // reinicia contador
        setTimeout(escribir, 500); // vuelve a escribir
    }
}

escribir();