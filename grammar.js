export {showGrammar, styleGrammar}

import {showGrammarExercise, styleGrammarExercise} from './grammar-exercise.js'

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

    const topics = grammarTopics.map(topic => topic.name)

    const topicButtonsContainer = document.createElement('div')
    document.body.append(topicButtonsContainer)

    topics.forEach(topic => {
        const topicBtn = document.createElement('button')
        topicBtn.innerText = topic
        topicButtonsContainer.append(topicBtn)
    })
   
    // add event listener to topicButtonsContainer
    topicButtonsContainer.addEventListener('click', (e) => {
        document.body.innerHTML = ''
        showGrammarExercise(e.target.innerText)
        styleGrammarExercise()
    })
}

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