import {grammarTopics} from './exercises./grammar.js'

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

// add styles to wrapper

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

function showGrammar() {
    const title = document.createElement('h1')
    title.innerText = 'Elige un tema para practicar la gramática'

    const backBtn = document.createElement('button')
    backBtn.innerText = 'Volver'

    const header = document.createElement('div')
    header.append(title, backBtn)
    document.body.append(header)

    backBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showWelcome()
        styleWelcome()
    })

    const topics = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6', 'Tema 7', 'Tema 8', 'Tema 9', 'Tema 10',]

    const topicButtonsContainer = document.createElement('div')
    document.body.append(topicButtonsContainer)

    topics.forEach(topic => {
        const topicBtn = document.createElement('button')
        topicBtn.innerText = topic
        topicButtonsContainer.append(topicBtn)
    })
   
}

//add styles to grammar

function styleGrammar() {
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