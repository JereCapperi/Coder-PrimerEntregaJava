function AdivinaNumero() {
    const numeromessi = 14

    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {
        const intento = parseInt(prompt("¿Con qué número debutó Messi en el Barcelona?"));
        intentos++;

        if (intento === numeromessi) {
            alert("!Felicitaciones, Messi debutó en el FC Barcelona con el número 14! Lo adivinaste en " + intentos + " intentos. ")
            adivinado = true;
        } else if (intento < numeromessi) {
            alert ("El número es más alto, prueba otro.");
        } else {
            alert ("El número es más bajo, prueba otro.");
        }
    }
}

AdivinaNumero();