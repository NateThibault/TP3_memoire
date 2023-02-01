// Validation du fomrulaire + déclaration variable
const nomJoueur = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const nbPair = document.getElementById('pair')
const form = document.getElementById('form')
const button = document.getElementById('go')
const erreurNom = document.getElementById('erreurNom')
const erreurPair = document.getElementById('erreurPair')
const cartes = document.querySelectorAll('.box')
const boardGame = document.getElementById('boardGame')
const temp = document.getElementById('temp')
const gagner = document.getElementById('gagner')
const recommencer = document.getElementById("reset")

const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')
const box10 = document.getElementById('box10')
const box11 = document.getElementById('box11')
const box12 = document.getElementById('box12')
const box13 = document.getElementById('box13')
const box14 = document.getElementById('box14')
const box15 = document.getElementById('box15')
const box16 = document.getElementById('box16')
const box17 = document.getElementById('box17')
const box18 = document.getElementById('box18')
const box19 = document.getElementById('box19')
const box20 = document.getElementById('box20')

const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const succes = document.getElementById("succes")
const gameOver = document.getElementById("gameOver")

const createur = {firstname: "Nathan", lastname: "Thibault" , Date:"Janvier 2023"} // Mon objet 

boardGame.style.visibility = 'hidden'
temp.style.display = 'none'
recommencer.style.display= "none"


/** VALIDATION DU FORMULAIRE AU DÉBUT AVANT LE JEUX */
button.addEventListener('click', (e) => {
  const messageNom = []
  const messagePair = []

  if (prenom.value == '' || prenom.value == null) {
    messageNom.push('*Votre nom est requis')
  }else{messageNom.push('')}

  if (prenom.value == parseInt(prenom.value)) {
    messageNom.push('*Entrer seulement des lettres')
  }else{messageNom.push('')}

  if (nbPair.value < 2 || nbPair.value > 10) {
    messagePair.push('*Entrer un nombre de paire entre 2 et 10')
  }else{messagePair.push('')}

  if (messageNom.length > 0) {
    e.preventDefault()
    erreurNom.innerText = messageNom.join('')
  }

  if (messagePair.length > 0) {
    e.preventDefault()
    erreurPair.innerText = messagePair.join('')
  }

  if (prenom.value != parseInt(prenom.value) && prenom.value != '' && nbPair.value >= 2 && nbPair.value <= 10) {
    return startGame()
  }
})




/** LORSQUE LE FORMULAIRE EST VALIDE ET ENVOYÉ , LA TABLE DE JEUX APPARAÎT SELON LE NOMBRE DE PAIRE QUE L'UTILISATEUR AURA ENTRÉ */ 

function startGame () {
  nomJoueur.innerText = 'Nom du joueur : ' + prenom.value 
  nomJoueur.style.visibility = 'visible'
  form.style.visibility = 'hidden'
  boardGame.style.visibility = 'visible'
  temp.style.display = 'block'

  if (nbPair.value == 2) {
    box5.remove()
    box6.remove()
    box7.remove()
    box8.remove()
    box9.remove()
    box10.remove()
    box11.remove()
    box12.remove()
    box13.remove()
    box14.remove()
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()

    /**PLACE ALÉATOIREMENT LES BOX DE MON HTML  */
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 2)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      /**PERMET DE RETOURNER 2 CARTES ET FAIT LA VALIDATION DES DEUX VALEURS. SI VALEUR #1 EST DIFFÉRENTE DE VALEUR #2, APRES 1 SECONDE LES CARTES SE CHACHENT*/
      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()

              /** PERMET DE VÉRIFIER SI TOUTE LES CARTES ON ÉTÉ TIRER ET RÉUSSI */
              if (matchCounter >= 2) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 3) {
    box7.remove()
    box8.remove()
    box9.remove()
    box10.remove()
    box11.remove()
    box12.remove()
    box13.remove()
    box14.remove()
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 3)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 3) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 4) {
    box9.remove()
    box10.remove()
    box11.remove()
    box12.remove()
    box13.remove()
    box14.remove()
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 4)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 4) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 5) {
    box11.remove()
    box12.remove()
    box13.remove()
    box14.remove()
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 5)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 5) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 6) {
    box13.remove()
    box14.remove()
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 6)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 6) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 7) {
    box15.remove()
    box16.remove()
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 7)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 7) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 8) {
    box17.remove()
    box18.remove()
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 8)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 8) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 9) {
    box19.remove()
    box20.remove()
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 9)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 9) setTimeout(() => partieGagner(), 10)
            } else {
                jouerWrong()
                setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  if (nbPair.value == 10) {
    cartes.forEach(function (box) {
      const randomNum = Math.floor(Math.random() * 10)
      box.style.order = randomNum

      let premier
      let deuxieme
      let matchCounter = 0

      cartes.forEach(function (box) {
        box.addEventListener('click', function () {
          if (!premier && !deuxieme) {
            premier = box
            box.classList.add('show')
          } else if (premier && !deuxieme) {
            deuxieme = box
            box.classList.add('show')
            if (premier.innerHTML === deuxieme.innerHTML) {
              premier.classList.add("match")
              deuxieme.classList.add("match")
              premier.style.pointerEvents = 'none'
              deuxieme.style.pointerEvents = 'none'
              premier = null
              deuxieme = null
              matchCounter++
              jouerCorrect()
              if (matchCounter >= 10) setTimeout(() => partieGagner(), 10)
            } else {
              jouerWrong()
              setTimeout(() => {
                premier.classList.remove('show')
                deuxieme.classList.remove('show')
                premier = null
                deuxieme = null
              }, 1000)
            }
          }
        })
      })
    })
  }

  
  const timeH = document.querySelector('h2')
  let tempTotal = 300

  displayTime(tempTotal)

  const countDown = setInterval(() => {
    tempTotal--
    displayTime(tempTotal)
    if (tempTotal <= 0 || tempTotal < 1) {
      endtime()
      clearInterval(countDown)
    }
  }, 1000)

  /** CONVERTI EN MINUTE LE tempTotal ET L'AFFICHE DANS LA PAGE  */
  function displayTime (second) {
    const min = Math.floor(second / 60)
    const sec = Math.floor(second % 60)
    timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
  }

  /** LORSQUE LE TIMER ARRIVE À ÉCHÉANCE (PARTIE PERDU) */
  function endtime () {
    jouerGameOver()
    timeH.remove()
    gagner.classList.add('perdu')
    boardGame.classList.add("verouillerBoardgame")
    gagner.innerHTML = 'TEMPS ÉCOULÉ, VOUS AVEZ PERDU !!!'
    recommencer.classList.add("resetRed")
    recommencer.style.display= "block"
    document.getElementById("createur").innerHTML = createur.firstname + " " + createur.lastname +  "<br/>" + createur.Date
  }

  /** LORSQUE TOUS LES CARTES SONT REVIRÉS DANS LE TEMPS RESPECTÉ (GAGNÉ LA PARTIE) */
  function partieGagner () {
    jouerSucces()
    clearInterval(countDown)
    temp.remove()
    gagner.innerHTML = 'VOUS AVEZ GAGNÉ !!! '
    recommencer.classList.add("resetGreen")
    recommencer.style.display= "block"
    document.getElementById("createur").innerHTML = createur.firstname + " " + createur.lastname +  "<br/>" + createur.Date
  }

  /** joue le bruit correct lorsque deux carte sont identiques */
  function jouerCorrect(){
    correct.play()
  }

  /** joue le bruit wrong lorsque deux carte ne sont pas identiques */
  function jouerWrong(){
    wrong.play()
  }

  /** joue le bruit succes lorsque jeux est fini et reussi */
  function jouerSucces(){
    succes.play()
  }
  /** joue le bruit gameOver lorsque le temps est ecouler */
  function jouerGameOver(){
    gameOver.play()
  }
}