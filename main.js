// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const openCookie = document.querySelector("#openCookie")
const tryAgain = document.querySelector("#tryAgain")

const frases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Escolha as suas batalhas e não desista até vencê-las.",
  "Os desafios são o tempero da vida! 💫❤️",
  "Acredite em si mesma, e já terá percorrido metade do caminho.",
  "A vida é uma jornada, e não um destino. ☘️💗",
  "Empodere-se, pois o mundo precisa da sua voz.",
  "Sonhe, acredite, dedique-se e realize!",
  "É sem medo de errar que conseguimos os melhores acertos.",
  "Deus não me colocou no mundo para ser coadjuvante da minha própria vida. 🌟",
  "Trabalhe para expressar o melhor de você, não para impressionar o outro.",
  "A vida é muito curta, por isso, faça valer a pena. 🥰🌻",
  "O fracasso é apenas uma oportunidade de começar de novo.",
  "Para construir o futuro, mantenha o foco no presente.",
  "Sou a autora da minha própria história, e cada dia é uma página em branco.",
  "A verdadeira mudança começa de dentro para fora. ❤️",
  "Grandes conquistas começam com pequenos sonhos. 🙌🥰",
  "Hoje é o melhor dia para começar.",
  "Nenhuma barreira é grande demais para vencer os seus objetivos.",
  "Celebre suas vitórias e cuide de você mesma, todos os dias. 💟🌻",
  "Meus sonhos me movem, mas minha verdade me guia.",
  "Obstáculos são oportunidades para evoluir.",
  "Felicidade é ter a alma leve e o coração em paz. 💞💫",
  "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência. - Henry Ford",
  "Não deixe que seus sonhos percam a força de voar! 🥰",
  "A coragem é o domínio do medo, e não a ausência dele.",
  "Cada adversidade é um trampolim para a grandeza.",
  "Nunca perca aquilo que faz você acreditar. 💫",
]

let randomFrases = frases[Math.floor(Math.random() * frases.length)]

// eventos

openCookie.addEventListener("click", clickCookie)
tryAgain.addEventListener("click", tryCookieAgain)

// funções

function clickCookie(event) {
  event.preventDefault()
  toggleScreen()

  screen2.querySelector("p").innerText = randomFrases
}

function tryCookieAgain() {
  toggleScreen()
  randomFrases = frases[Math.floor(Math.random() * frases.length)]
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
