import './habilidades.css'
import { lenguajes } from '../lenguajes_programas/lenguajes_programas.js'

export function habilidades() {
  const habilidadesSection = document.createElement('section')
  habilidadesSection.className = 'habilidadesSection'

  const h2Habilidades = document.createElement('h2')
  h2Habilidades.className = 'h2-Habilidades'
  h2Habilidades.innerText = ' Progreso en Lenguajes'

  const contenedor = document.createElement('div')
  contenedor.className = 'contenedor-lenguajes'

  lenguajes.forEach((lenguaje) => {
    const printLenguaje = document.createElement('div')
    printLenguaje.className = 'lenguajes'

    printLenguaje.innerHTML = ` 
      <img src="${lenguaje.logo}" alt="${lenguaje.nombre}" class="logo-lenguaje">
      <div class="nombre-lenguaje">${lenguaje.nombre}</div>
      <div class="barra-progreso">
      <div class="progreso" style="width: ${lenguaje.porcentaje}%;"></div>
      </div>
    `
    contenedor.appendChild(printLenguaje)
  })
  habilidadesSection.appendChild(h2Habilidades)
  habilidadesSection.appendChild(contenedor)
  document.querySelector('#app').appendChild(habilidadesSection)
}
