import './header.css'
import { mostrarContacto } from './contactoCard/contactoCard.js'
import { menuSobreMi } from './sectionHeader/sectionHeader.js'

export function header() {
  const header = document.querySelector('#app')
  const headerDiv = document.createElement('div')
  headerDiv.id = 'header'

  const nombre = document.createElement('h2')
  nombre.className = 'h2-nombre'
  nombre.innerText = 'Iván Táboas Domínguez'

  const info = document.createElement('section')
  info.className = 'info'

  const secciones = ['Sobre mí', 'Experiencia', 'Proyectos', 'Futuro']

  const menu = menuSobreMi(secciones, (item) => {
    alert(`Mostrar sección: ${item}`)
  })

  const contacto = document.createElement('button')
  contacto.className = 'btnContacto'
  contacto.innerText = 'Contacto'
  contacto.addEventListener('click', () => {
    mostrarContacto()
  })

  info.appendChild(menu)
  headerDiv.appendChild(nombre)
  headerDiv.appendChild(info)
  headerDiv.appendChild(contacto)
  header.appendChild(headerDiv)
}
