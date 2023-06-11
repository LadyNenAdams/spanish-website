export {buildConjugation, styleConjugation}

function buildConjugation(exercise, exerciseContainer) {
    const exerciseCard = document.createElement('div')

    //append exerciseCard to exerciseContainer
    exerciseContainer.append(exerciseCard)
    // create a h2 inside exerciseCard
    const exerciseName = document.createElement('h2')
    exerciseName.innerText = exercise.name

    // create a p inside exerciseCard
    const exerciseTask = document.createElement('p')
    exerciseTask.innerText = exercise.task

    // append h2 and p inside exerciseCard
    exerciseCard.append(exerciseName, exerciseTask)

    //create a list of verbs inside exerciseCard
    const verbList = document.createElement('ul')
    exercise.verbs.forEach(verb => {
        const verbItem = document.createElement('li')
        verbItem.innerText = verb.infinitive
        verbList.append(verbItem)
        //add styles to verbList
        verbList.style.listStyleType = 'none'
        verbList.style.backgroundColor = 'lightgray'
        verbList.style.borderRadius = '10px'
        verbList.style.margin = '10px'
        verbList.style.padding = '10px'
        
    })

    exerciseCard.append(verbList)

    return exerciseCard
}

function styleConjugation(exerciseCard) {
    exerciseCard.style.width = '300px'
    exerciseCard.style.height = '300px'
    exerciseCard.style.backgroundColor = 'lightgray'
    exerciseCard.style.borderRadius = '10px'
    exerciseCard.style.margin = '10px'
    exerciseCard.style.padding = '10px'
}