import './proyectos.css'
import { proyectos } from './proyectos.js'

export function printProyectos() {
  const seccion = document.createElement('section')
  seccion.className = 'seccion-proyectos'

  proyectos.forEach((proyecto) => {
    const tarjeta = document.createElement('div')
    tarjeta.className = 'tarjeta-proyecto'
    tarjeta.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <div class="botones">
      <a href="${proyecto.demo}">Ver Demo</a>
      <a href="${proyecto.codigo}">Ver Código</a>
    </div>
    `
    seccion.appendChild(tarjeta)
  })
  document.querySelector('#app').appendChild(seccion)
}
