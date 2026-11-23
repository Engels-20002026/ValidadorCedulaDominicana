
const formulario = document.getElementById("cedulaForm");
const campoCedula = document.getElementById("cedula");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener la cédula y eliminar guiones y espacios
    const cedula = campoCedula.value.replace(/[\s-]/g, "");

    // Comprobar que tenga exactamente 11 dígitos
    if (!/^\d{11}$/.test(cedula)) {
        mostrarResultado(
            "Cédula inválida. Debe contener exactamente 11 dígitos.",
            false
        );
        return;
    }

    // Separar los primeros 10 dígitos
    const primerosDiez = cedula.substring(0, 10);

    // Obtener el último dígito (dígito verificador)
    const digitoVerificador = parseInt(cedula.charAt(10));

    let suma = 0;

    // Aplicar el algoritmo módulo 10
    for (let i = 0; i < primerosDiez.length; i++) {

        let digito = parseInt(primerosDiez.charAt(i));

        // Multiplicar alternadamente por 1 y 2
        let multiplicador = (i % 2 === 0) ? 1 : 2;

        let producto = digito * multiplicador;

        // Si el resultado tiene dos cifras, sumar sus dígitos
        if (producto > 9) {
            producto = Math.floor(producto / 10) + (producto % 10);
        }

        suma += producto;
    }

    // Calcular el dígito verificador esperado
    const digitoCalculado = (10 - (suma % 10)) % 10;

    // Comparar ambos dígitos
    if (digitoCalculado === digitoVerificador) {
        mostrarResultado(
            "¡Cédula válida! El dígito verificador es correcto.",
            true
        );
    } else {
        mostrarResultado(
            "Cédula inválida. El dígito verificador no coincide.",
            false
        );
    }
});

// Mostrar el resultado en pantalla
function mostrarResultado(mensaje, esValida) {

    resultado.textContent = mensaje;

    resultado.className = esValida
        ? "resultado valida"
        : "resultado invalida";
}
