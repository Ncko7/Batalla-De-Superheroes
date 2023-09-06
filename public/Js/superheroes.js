const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let superheroes = []
let superheroesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeSuperHeroes
let inputSuperman 
let inputBatman 
let inputFlash 
let inputWonderwoman
let inputAquaman
let inputGreenlantern
let personajeJugador
let personajeJugadorObjeto
let ataquesSuperheroe
let ataquesSuperheroeEnemigo
let botonFuerza 
let botonVelocidad 
let botonMurcielago 
let botones = []
let indexAtaqueJugador = []
let indexAtaqueEnemigo = []
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3 
let lienzo = mapa.getContext('2d')
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mapa.png'
let altura
let anchoDelMapa = window.innerWidth - 20 
const anchoMaximoDelMapa = 800

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

altura = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = altura



class Superheroe {
    constructor(nombre, foto, vida, tipo, fotoMapa, id= null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0 
        this.velocidadY = 0 
    }
    pintarSuperheroe() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let superman = new Superheroe('Superman', './assets/superman.png', 5, 'Fuerza', './assets/superman.png')

let flash = new Superheroe('Flash', './assets/flash.png', 5, 'Velocidad','./assets/flash.png')

let batman = new Superheroe('Batman', './assets/batman.png', 5, 'Murcielago', './assets/batman.png') 

let wonderwoman = new Superheroe('Wonderwoman', './assets/wonderwoman.png', 5, 'Fuerza', './assets/wonderwoman.png')

let aquaman = new Superheroe('Aquaman', './assets/aquaman.png', 5, 'Velocidad', './assets/aquaman.png')

let greenlantern = new Superheroe('Greenlantern', './assets/greenlantern.png', 5, 'Murcielago', './assets/greenlantern.png')


const SUPERMAN_ATAQUES = [
    { nombre: '💪🏻', id: 'boton-fuerza' },
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '🦇', id: 'boton-murcielago'},
]

superman.ataques.push(...SUPERMAN_ATAQUES)

const FLASH_ATAQUES = [
    { nombre: '⚡', id: 'boton-velocidad' },
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '🦇', id: 'boton-murcielago'},
]
flash.ataques.push(...FLASH_ATAQUES)

const BATMAN_ATAQUES = [
    { nombre: '🦇', id: 'boton-murcielago' },
    { nombre: '🦇', id: 'boton-murcielago'},
    { nombre: '🦇', id: 'boton-murcielago'},
    { nombre: '⚡', id: 'bboton-velocidad'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
]
batman.ataques.push(...BATMAN_ATAQUES)

const WONDERWOMAN_ATAQUES = [
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '🦇', id: 'boton-murcielago'},

]
wonderwoman.ataques.push(...WONDERWOMAN_ATAQUES)

const AQUAMAN_ATAQUES = [
    { nombre: '⚡', id: 'boton-velocidad' },
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '⚡', id: 'boton-velocidad'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
    { nombre: '🦇', id: 'boton-murcielago'},
]
aquaman.ataques.push(...AQUAMAN_ATAQUES)

const GREENLANTERN_ATAQUES = [
    { nombre: '🦇', id: 'boton-murcielago' },
    { nombre: '🦇', id: 'boton-murcielago'},
    { nombre: '🦇', id: 'boton-murcielago'},
    { nombre: '⚡', id: 'bboton-velocidad'},
    { nombre: '💪🏻', id: 'boton-fuerza'},
]
greenlantern.ataques.push(...GREENLANTERN_ATAQUES)

superheroes.push(superman, flash, batman, wonderwoman, aquaman, greenlantern)


function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    
    superheroes.forEach((superheroe) => {
        opcionDeSuperHeroes = `
        <input type="radio" name="personaje" id=${superheroe.nombre} />
        <label class="tarjeta-de-personaje" for=${superheroe.nombre}>
            <p>${superheroe.nombre}</p>
            <img src=${superheroe.foto} alt=${superheroe.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeSuperHeroes

     inputSuperman = document.getElementById('Superman')
     inputBatman = document.getElementById('Batman')
     inputFlash = document.getElementById('Flash')
     inputWonderwoman = document.getElementById('Wonderwoman')
     inputGreenlantern = document.getElementById('Greenlantern')
     inputAquaman = document.getElementById('Aquaman')

    })

    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
    
}

function unirseAlJuego() {
    fetch("http://192.168.100.160:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta 
                    })
            }
        })
}

function seleccionarPersonajeJugador() {

    if(inputSuperman.checked) {
       spanPersonajeJugador.innerHTML = inputSuperman.id
       personajeJugador = inputSuperman.id
    } else if (inputBatman.checked) {
        spanPersonajeJugador.innerHTML = inputBatman.id
        personajeJugador = inputBatman.id
    } else if (inputFlash.checked) {
        spanPersonajeJugador.innerHTML = inputFlash.id
        personajeJugador = inputFlash.id
    } else if (inputGreenlantern.checked) {
        spanPersonajeJugador.innerHTML = inputGreenlantern.id
        personajeJugador = inputGreenlantern.id
    } else if (inputAquaman.checked) {
        spanPersonajeJugador.innerHTML = inputAquaman.id
        personajeJugador = inputAquaman.id
    } else if (inputWonderwoman.checked) {
        spanPersonajeJugador.innerHTML = inputWonderwoman.id
        personajeJugador = inputWonderwoman.id
    } else {
        alert("Por favor, selecciona una superhéroe 😉")
        reiniciarJuego()
    }

    sectionSeleccionarPersonaje.style.display = 'none'
    
    seleccionarSuperheroe(personajeJugador)

    extraerAtaques(personajeJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarSuperheroe(personajeJugador) {
    fetch(`http://192.168.100.160:8080/superheroe/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            superheroe: personajeJugador
        })
    })

}

function extraerAtaques(personajeJugador) {
    let ataques 
    for (let i = 0; i < superheroes.length; i++) {
        if (personajeJugador === superheroes[i].nombre) {
            ataques = superheroes[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesSuperheroe = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesSuperheroe
    })

     botonFuerza = document.getElementById('boton-fuerza')
     botonVelocidad = document.getElementById('boton-velocidad')
     botonMurcielago = document.getElementById('boton-murcielago')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '💪🏻') {
                ataqueJugador.push('FUERZA 💪🏻') 
                console.log(ataqueJugador)
                boton.style.background = '#213363'
                boton.disabled = true
            } else if (e.target.textContent === '⚡') {
                ataqueJugador.push('VELOCIDAD ⚡') 
                console.log(ataqueJugador)
                boton.style.background = '#213363'
                boton.disabled = true
            } else {
                ataqueJugador.push('MURCIELAGO 🦇') 
                console.log(ataqueJugador)
                boton.style.background = '#213363'
                boton.disabled = true
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.100.160:8080/superheroe/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.100.160:8080/superheroe/${enemigoId}/ataques`)
        .then(function (res) {
           if (res.ok) {
               res.json()
                   .then(function ({ ataques }) {
                       if (ataques.length === 5 ) {
                           ataqueEnemigo = ataques
                           combate() 
                       }
                   })
           }
        })
}

function seleccionarPersonajeEnemigo(enemigo) {
    
    spanPersonajeEnemigo.innerHTML = enemigo.nombre
    ataquesSuperheroeEnemigo = enemigo.ataques
    secuenciaAtaque()
        
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesSuperheroeEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUERZA 💪🏻')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('VELOCIDAD ⚡')
    } else {
        ataqueEnemigo.push('MURCIELAGO 🦇')
    }
    console.log(ataqueEnemigo)
    iniciarBatalla()
}

function iniciarBatalla() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() { 
    clearInterval(intervalo)

    for (let index = 0; index <ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATASTE 😯")
        } else if (ataqueJugador[index] === 'FUERZA 💪🏻' && ataqueEnemigo[index] === 'MURCIELAGO 🦇') {
            indexAmbosOponentes(index, index)
            crearMensaje("FELICITACIONES GANASTE !!!🎉🥳👾")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'VELOCIDAD ⚡' && ataqueEnemigo[index] === 'FUERZA 💪🏻') {
            indexAmbosOponentes(index, index)
            crearMensaje("FELICITACIONES GANASTE !!!🎉🥳👾")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'MURCIELAGO 🦇' && ataqueEnemigo[index] === 'VELOCIDAD ⚡') {
            indexAmbosOponentes(index, index)
            crearMensaje("FELICITACIONES GANASTE !!!🎉🥳👾")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("Ups perdiste ☠️ 😰👎🏻")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate, juega de nuevo! ⚔️ 🟰 😎")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Felicitaciones!! Ganaste la batalla ⚔️ 🎉 🏆")
    } else {
        crearMensajeFinal("Game Over!!! Perdiste esta batalla ⚔️ 👾 😭")
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground, 
        0,
        0,
        mapa.width,
        mapa.height
    )
    personajeJugadorObjeto.pintarSuperheroe()
    
    enviarPosicion(personajeJugadorObjeto.x, personajeJugadorObjeto.y)

    superheroesEnemigos.forEach(function (superheroe) {
        superheroe.pintarSuperheroe()
        revisarColision(superheroe)
    })
}

function enviarPosicion(x, y) {
    fetch(`http://192.168.100.160:8080/superheroe/${jugadorId}/posicion`, {
        method: "post", 
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x, 
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function({ enemigos }) {
                    console.log(enemigos)
                    superheroesEnemigos = enemigos.map(function (enemigo) {
                        let superheroeEnemigo = null
                        const superheroeNombre = enemigo.superheroe.nombre || ""
                        if (superheroeNombre === "Superman") {
                            superheroeEnemigo = new Superheroe('Superman', './assets/superman.png', 5, 'Fuerza', './assets/superman.png', enemigo.id)
                         } else if (superheroeNombre === "Flash") {
                            superheroeEnemigo = new Superheroe('Flash', './assets/flash.png', 5, 'Velocidad','./assets/flash.png', enemigo.id)
                        } else if (superheroeNombre === "Batman") {
                            superheroeEnemigo = new Superheroe('Batman', './assets/batman.png', 5, 'Murcielago', './assets/batman.png', enemigo.id)
                        } else if (superheroeNombre === "Wonderwoman") {
                            superheroeEnemigo = new Superheroe('Wonderwoman', './assets/wonderwoman.png', 5, 'Fuerza', './assets/wonderwoman.png', enemigo.id)
                        } else if (superheroeNombre === "Aguaman") {
                            superheroeEnemigo = new Superheroe('Aquaman', './assets/aquaman.png', 5, 'Velocidad', './assets/aquaman.png', enemigo.id)
                        } else if (superheroeNombre === "Greenlantern") {
                            superheroeEnemigo = new Superheroe('Greenlantern', './assets/greenlantern.png', 5, 'Murcielago', './assets/greenlantern.png', enemigo.id)
                        }
    
                        superheroeEnemigo.x = enemigo.x
                        superheroeEnemigo.y = enemigo.y
    
                        return superheroeEnemigo
                        })  
                    })
            }
         })
}
        

function moverDerecha() {
    personajeJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    personajeJugadorObjeto.velocidadX = -5
    
}
function moverAbajo() {
    personajeJugadorObjeto.velocidadY = 5
   
}
function moverArriba() {
    personajeJugadorObjeto.velocidadY = -5
    
}

function detenerMovimiento() {
    personajeJugadorObjeto.velocidadX = 0 
    personajeJugadorObjeto.velocidadY = 0 
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft': 
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    personajeJugadorObjeto = obtenerObjetoSuperheroe(personajeJugador)
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla )
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoSuperheroe () {
    for (let i = 0; i < superheroes.length; i++) {
        if (personajeJugador === superheroes[i].nombre) {
            return superheroes[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaSuperheroeEnemigo = enemigo.y
    const abajoSuperheroeEnemigo = enemigo.y + enemigo.alto
    const derechaSuperheroeEnemigo = enemigo.x + enemigo.ancho
    const izquierdaSuperheroeEnemigo  = enemigo.x

    const arribaSuperheroe = personajeJugadorObjeto.y
    const abajoSuperheroe = personajeJugadorObjeto.y + enemigo.alto
    const derechaSuperheroe = personajeJugadorObjeto.x + enemigo.ancho
    const izquierdaSuperheroe =  personajeJugadorObjeto.x

    if (
        abajoSuperheroe < arribaSuperheroeEnemigo ||
        arribaSuperheroe > abajoSuperheroeEnemigo ||
        derechaSuperheroe <  izquierdaSuperheroeEnemigo ||
        izquierdaSuperheroe > derechaSuperheroeEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision'); 

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarPersonajeEnemigo(enemigo)

}

window.addEventListener('load', iniciarJuego)



