import './descripcion.css'
import { presentacion } from '../presentación/presentacion.js'

export function descripcion() {
  const descripcion = document.querySelector('#contenedor-info')
  descripcion.innerHTML = ''

  const divDescripcion = document.createElement('div')
  divDescripcion.className = 'div-descripcion'

  const descripcionTexto = document.createElement('div')
  descripcionTexto.className = 'descripcion'
  descripcionTexto.innerHTML = `
      <h2>Hola me llamo Iván!</h2>
    <p>¡Hola! Soy una persona curiosa, trabajadora y con muchas ganas de aprender cosas nuevas. Después de varios años en otro sector, he decidido cambiar de rumbo y meterme de lleno en el mundo de la programación. Me encanta entender cómo funcionan las cosas, resolver problemas y seguir mejorando cada día. Aunque estoy empezando, me esfuerzo al máximo en cada proyecto y tengo muchas ganas de crecer en este nuevo camino profesional.</p>
    <h3>“Nunca es tarde para empezar algo que te apasiona.”</h3>
    <button id="btn-presentacion" class="boton-presentacion-descripcion">Ver presentación</button>
  `
  const fotoPerfil = document.createElement('div')
  fotoPerfil.className = 'divFotoPerfil'
  const foto = document.createElement('img')
  foto.className = 'fotoPerfil'
  foto.src = './src/assets/imagen/yo.jpeg'
  foto.alt = 'Foto perfil'

  fotoPerfil.appendChild(foto)
  divDescripcion.appendChild(descripcionTexto)
  divDescripcion.appendChild(fotoPerfil)
  descripcion.appendChild(divDescripcion)

  document.getElementById('btn-presentacion').addEventListener('click', () => {
    presentacion()
  })
}
