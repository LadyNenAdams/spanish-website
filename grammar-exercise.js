export { showGrammarExercise, styleGrammarExercise }

import { buildConjugation, styleConjugation } from './type-conjugation.js'

function showGrammarExercise(topicName) {
    const title = document.createElement('h1')
    title.innerText = `¡Bienvenido a la gramática! \n ${topicName}`

    const backBtn = document.createElement('button')
    backBtn.innerText = 'Volver'

    const header = document.createElement('div')
    header.append(title, backBtn)
    document.body.append(header)

    backBtn.addEventListener('click', () => {
        document.body.innerHTML = ''
        showGrammar()
        styleGrammar()
    })

    const grammarTopic = grammarTopics.find(topic => topic.name === topicName)

    const exerciseContainer = document.createElement('div')
    exerciseContainer.style.display = 'flex'
    exerciseContainer.style.flexWrap = 'wrap'
    exerciseContainer.style.justifyContent = 'space-around'
    document.body.append(exerciseContainer)

    grammarTopic.exercises.forEach(exercise => {
        if (exercise.type === 'conjugation') {
            const exerciseCard = buildConjugation(exercise, exerciseContainer)
            styleConjugation(exerciseCard)

        }
    })

    // add event listener to exerciseContainer
    exerciseContainer.addEventListener('click', (e) => {
        document.body.innerHTML = ''
        showGrammarExercise(e.target.innerText)
        styleGrammarExercise()
    })
}

function styleGrammarExercise() {
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