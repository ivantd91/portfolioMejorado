import './style.css'
import { header } from './components/header/header.js'
import { descripcion } from './components/descripción/descripcion.js'
import { presentacion } from './components/presentación/presentacion.js'
import { habilidades } from './components/Habilidades/habilidades.js'
import { printProyectos } from './components/proyectos/printProyectos.js'
header()
const contenedorInfo = document.createElement('section')
contenedorInfo.id = 'contenedor-info'
document.querySelector('#app').appendChild(contenedorInfo)
presentacion()
descripcion()

habilidades()
printProyectos()
//revisar maquetacion de todo//
