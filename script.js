const numeroElement = document.getElementById("numUsuario");
const mensajeP = document.getElementById("mensaje");
const numIngresadosP = document.getElementById("numIngresados");
const btnEnviar = document.getElementById("btnNumero");

// Generar números aleatorios
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 501);
}

let aleatorio = generarNumeroAleatorio();
//console.log(aleatorio);
let vidas = 8;

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const numUsuario = parseInt(numeroElement.value, 10);

    if (!isNaN(numUsuario)) {

        if (numUsuario === aleatorio) {
            mensajeP.innerText = "¡Ganaste!";
            numIngresadosP.innerText += " " + numUsuario;
            terminarJuego();
            document.body.appendChild(reiniciarBtn);

        } else {
            vidas--;
            numIngresadosP.innerText += " " + numUsuario;
            const diferencia = Math.abs(numUsuario - aleatorio);

            if (numUsuario > aleatorio) {
                if (diferencia >= 5 && diferencia <= 15) {
                    mensajeP.innerText = `Te pasasando por poco, ¡casi lo tienes! Te quedan ${vidas} intentos.`;
                } else if (diferencia >= 16 && diferencia <= 25) {
                    mensajeP.innerText = `Te estás alejando un toque. Te quedan ${vidas} intentos.`;
                } else if (diferencia >= 26 && diferencia <= 50) {
                    mensajeP.innerText = `Te estás pasando demasiado. ¡Cuidado! Te quedan ${vidas} intentos.`;
                } else if (diferencia >= 51) {
                    mensajeP.innerText = `Te pasaste, pero muchismo. ¡Baja! Te quedan ${vidas} intentos.`;
                } else {
                    mensajeP.innerText = `Te pasaste por muuuy poco. Te quedan ${vidas} intentos.`;
                }
            }else {
                if (numUsuario < aleatorio) {
                    if (diferencia >= 5 && diferencia <= 15) {
                        mensajeP.innerText = `Te quedaste corto por poco, ¡casi lo ténes! Te quedan ${vidas} intentos.`;
                    } else if (diferencia >= 16 && diferencia <= 25) {
                        mensajeP.innerText = `Te estás un toque corto. ¡Subile un poco! Te quedan ${vidas} intentos.`;
                    } else if (diferencia >= 26 && diferencia <= 50) {
                        mensajeP.innerText = `Te estás quedando muy corto. Te quedan ${vidas} intentos.`;
                    } else if (diferencia >= 51) {
                        mensajeP.innerText = `Te estás quedando re contra corto. ¡Subí mucho más! Te quedan ${vidas} intentos.`;
                    } else {
                        mensajeP.innerText = `UUH se siente, subí un poquito . Te quedan ${vidas} intentos.`;

                    }
                }
            }
            
            if (vidas === 0) {
                mensajeP.innerText = "Perdiste, no te quedan más intentos. El número era " + aleatorio;
                terminarJuego();
                document.body.appendChild(reiniciarBtn);
            }
        }
        numeroElement.value = '';
    } else {
        mensajeP.innerText = "Por favor, ingresa un número válido.";
    }
});

function terminarJuego() {
    btnEnviar.disabled = true;
    numeroElement.disabled = true;
}

const reiniciarBtn = document.createElement("button");
reiniciarBtn.innerText = "REINICIAR";
reiniciarBtn.classList.add("reiniciar-btn");
reiniciarBtn.addEventListener("click", () => {
    vidas = 8;
    btnEnviar.disabled = false;
    numeroElement.disabled = false;
    aleatorio = generarNumeroAleatorio();
    mensajeP.innerText = "";
    numIngresadosP.innerText = "Números ingresados:";
    numeroElement.value = "";
    reiniciarBtn.remove();
    console.log(aleatorio);
});













