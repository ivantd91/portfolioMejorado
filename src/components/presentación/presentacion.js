import './presentacion.css'
import { descripcion } from '../descripción/descripcion.js'

export function presentacion() {
  const presentacionSelec = document.querySelector('#contenedor-info')
  presentacionSelec.innerHTML = ''

  const presentacionSection = document.createElement('section')
  presentacionSection.className = 'presentacionSection'
  presentacionSection.innerHTML = `
      <h2>“Nunca es tarde para empezar algo que te apasiona.”</h2>
    <p>
      Después de más de 10 años trabajando en el sector de la automoción, he decidido dar un giro a mi vida profesional y apostar por lo que realmente me motiva: la programación. Aunque mis estudios iniciales estuvieron enfocados al ámbito de la salud —soy técnico en masaje terapéutico— siempre he sido una persona curiosa, con ganas de aprender y de enfrentar nuevos retos.

Actualmente me encuentro realizando un curso de desarrollo full stack, donde estoy aprendiendo a crear aplicaciones web desde cero, tanto del lado del cliente como del servidor. Me ilusiona ver cómo mis conocimientos van creciendo y cómo puedo transformar ideas en proyectos reales.

Me considero una persona comprometida, responsable y flexible, con alta capacidad de adaptación. Mi experiencia en distintos sectores me ha enseñado la importancia del trabajo en equipo, la constancia y el esfuerzo diario. Estoy totalmente abierto a nuevas oportunidades donde pueda seguir aprendiendo, aportar mi experiencia y crecer en este nuevo camino dentro del mundo tecnológico.
    </p>
    <button id="btn-descripcion" class="boton-presentacion-descripcion">volver a descripción</button>
  `
  presentacionSelec.appendChild(presentacionSection)
  document.getElementById('btn-descripcion').addEventListener('click', () => {
    descripcion()
  })
}
