const texto = "Desarrollador Web";

const maquina = document.getElementById("maquina");

let i = 0;
let borrando = false;

function escribir() {

    if (!borrando) {

        
        maquina.textContent = texto.substring(0, i + 1);
        i++;

        // Cuando termina de escribir
        if (i === texto.length) {
            borrando = true;
            setTimeout(escribir, 1500); // espera antes de borrar
            return;
        }

    } else {

        // Borrar letra por letra
        maquina.textContent = texto.substring(0, i - 1);
        i--;

        // Cuando queda vacío vuelve a escribir
        if (i === 0) {
            borrando = false;
        }
    }

    setTimeout(escribir, 100);
}

escribir();