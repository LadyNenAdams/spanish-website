showWelcome()
styleWelcome()

// create a welcome-text
function showWelcome() {
    const welcomeText = document.createElement('h1')
    welcomeText.innerText = 'Hola, ¡bienvenidos!'

    // create 2 buttons under welcome-text
    const grammarBtn = document.createElement('button')
    grammarBtn.innerText = 'Gramática'
    const vocabularyBtn = document.createElement('button')
    vocabularyBtn.innerText = 'Vocabulario'

    // append the buttons under welcome-text
    const btnContainer = document.createElement('div')
    btnContainer.append(grammarBtn, vocabularyBtn)
    
    // append both welcomeText and the buttons to the body
    document.body.append(welcomeText, btnContainer)

    // add event listeners to the buttons
    grammarBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showGrammar()
    })

    vocabularyBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showVocabulary()
    })         

}

// add styles to showWelcome
function styleWelcome() {
    const welcomeText = document.querySelector('h1')
    welcomeText.style.textAlign = 'center'
    welcomeText.style.fontSize = '40px'
    welcomeText.style.marginTop = '20px'

    const btnContainer = document.querySelector('div')
    btnContainer.style.display = 'flex'
    btnContainer.style.justifyContent = 'space-evenly'
    btnContainer.style.marginTop = '20px'

    const buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.style.fontSize = '20px'
        btn.style.padding = '10px'
        btn.style.borderRadius = '5px'
        btn.style.border = 'none'
        btn.style.cursor = 'pointer'
    })
}


