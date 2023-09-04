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
let listBox = []
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const succes = document.getElementById("succes")
const gameOver = document.getElementById("gameOver")
const createur = {firstname: "Nathan", lastname: "Thibault" , Date:"Janvier 2023"} // Mon objet 

boardGame.style.visibility = 'hidden'
temp.style.display = 'none'
recommencer.style.display= "none"




/* Form that is called when the user clicks on the form button. */
button.addEventListener('click', (e) => {
  const messageNom = []
  const messagePair = []

  if (prenom.value == '' || prenom.value == null || prenom.value.length < 2) {
    messageNom.push('*Votre nom est requis avec minimum 2 lettres')
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

  if (prenom.value != '' && nbPair.value >= 2 && nbPair.value <= 10 && prenom.value.length >= 2) {
    return startGame()
  }
})

/**
 * It gets all the boxes and puts them in an array.
 */
function getBoxes(){  
  for(i = 0; i < 16 ; i++){
    listBox.push(document.getElementById('box'+i))
  } 
}

/**
 * It's a function that starts the game
 */
function startGame () {
  nomJoueur.innerText =  prenom.value 
  nomJoueur.style.visibility = 'visible'
  form.style.visibility = 'hidden'
  boardGame.style.visibility = 'visible'
  temp.style.display = 'block'

  getBoxes()
  removeBox(nbPair.value)
  
  
  /* Assigning a random number to each box. */
  cartes.forEach(function (box) {
    const randomNum = Math.floor(Math.random() * nbPair.value)
    box.style.order = randomNum

    
    /* A function that is called when the user clicks on a card. */
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
            jouerCorrect()
            premier.classList.add("match")
            deuxieme.classList.add("match")
            premier.style.pointerEvents = 'none'
            deuxieme.style.pointerEvents = 'none'
            premier = null
            deuxieme = null
            matchCounter++
            
            
            /* Checking if the number of matches is greater than or equal to the number of pairs. If it
            is, it calls the `partieGagner()` function. If it is not, it calls the `jouerWrong()`
            function. */
            if (matchCounter >= nbPair.value) setTimeout(() => partieGagner(), 10)
          }
          else {
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

  
 /* It's a timer 300 sec (5 min). */
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

  
  /**
   * If the number of minutes is less than 10, add a 0 to the front of the number, otherwise, add
   * nothing. Then, add a colon. Then, if the number of seconds is less than 10, add a 0 to the front
   * of the number, otherwise, add nothing.
   * @param second - the number of seconds that have passed since the timer started
   */
  function displayTime (second) {
    const min = Math.floor(second / 60)
    const sec = Math.floor(second % 60)
    timeH.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
  }

  
  /**
   * If the time is up, play the game over sound, remove the time, add the class "perdu" to the
   * "gagner" div, add the class "verouillerBoardgame" to the "boardGame" div, add the text "TEMPS
   * ÉCOULÉ, VOUS AVEZ PERDU !!!", add the class "resetRed" to the "recommencer"
   * div, display the "recommencer" div, and add the creator's name and date to the "createur" div.
   */
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

  /* A function that is called when the user wins the game. It plays the "succes" sound, clears the
  timer, removes the time, adds the text "VOUS AVEZ GAGNÉ !!!" to the "gagner" div, adds the class
  "resetGreen" to the "recommencer" div, displays the "recommencer" div, and adds the creator's name
  and date to the "createur" div. */
  function partieGagner () {
    jouerSucces()
    clearInterval(countDown)
    temp.remove()
    gagner.innerHTML = 'VOUS AVEZ GAGNÉ !!! '
    recommencer.classList.add("resetGreen")
    recommencer.style.display= "block"
    document.getElementById("createur").innerHTML = createur.firstname + " " + createur.lastname +  "<br/>" + createur.Date
    fireworks()
  }
  
 /**
  * It removes the boxes that are not needed
  * @param nbPairValue - the number of pairs of boxes to remove
  */
  function removeBox(nbPairValue)
  {
    let startingIndex = (nbPairValue * 2) - 4
    for(i=startingIndex; i<16; i++)
    {
      listBox[i].remove()
    }
  }

  /**
   * When the user have a pair or not,win or lose, the function will play the sound.
   */
  function jouerCorrect(){
    correct.play()
  }
  function jouerWrong(){
    wrong.play()
  }
  function jouerSucces(){
    succes.play()
  }
  function jouerGameOver(){
    gameOver.play()
  }
}