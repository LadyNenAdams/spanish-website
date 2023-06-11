export { showWelcome, styleWelcome }

import { showGrammar, styleGrammar  } from './grammar.js'

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
    
    //wrap both welcomeText and the buttons into div
    const wrapper = document.createElement('div')
    wrapper.append(welcomeText, btnContainer)

    // append both welcomeText and the buttons to the body
    document.body.append(wrapper)

    // add event listeners to the buttons
    grammarBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showGrammar()
        styleGrammar()
    })

    vocabularyBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showVocabulary()
    })         

}

function styleWelcome() {
    const wrapper = document.querySelector('div')
    wrapper.style.textAlign = 'center'
    wrapper.style.marginTop = '100px'
    wrapper.style.marginBottom = '100px'
    wrapper.style.fontFamily = 'sans-serif'
    wrapper.style.fontSize = '40px'
    wrapper.style.fontWeight = 'bold'
    wrapper.style.color = 'black'

//add styles to buttons

    const buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.style.margin = '10px'
        btn.style.padding = '10px'
        btn.style.borderRadius = '5px'
        btn.style.backgroundColor = 'lightblue'
        btn.style.border = 'none'
        btn.style.cursor = 'pointer'
    
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = 'lightgreen'
        })
        
        btn.addEventListener('mouseout', () => {
             btn.style.backgroundColor = 'lightblue'
        })

            
    })       
                
}