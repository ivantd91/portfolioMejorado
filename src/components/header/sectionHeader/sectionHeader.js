import './sectionHeader.css'

export function menuSobreMi(items, mostrar) {
  const ul = document.createElement('ul')
  ul.className = ' apartados'

  items.forEach((texto) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = '#'
    a.innerText = texto

    a.addEventListener('click', (e) => {
      e.preventDefault()
      mostrar(texto)
    })
    li.appendChild(a)
    ul.appendChild(li)
  })
  return ul
}
