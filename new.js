document.querySelectorAll('p').forEach((element) => {
    if (element.textContent.includes("?")) {
        element.classList.add('question');
    }
});

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('choice')) {
//         event.target.classList.add('selected-choice');
//     }
// });

function updateQuestionStyles() {
    document.querySelectorAll('p').forEach((element) => {
        if (element.textContent.includes("?") && !element.classList.contains('question')) {
            element.classList.add('question');
        }
        else if (element.textContent.includes("әзірлеуші") || element.textContent.includes("суретші") || element.textContent.includes("дизайнер") || element.textContent.includes("разработчик") || element.textContent.includes("художник") || element.textContent.includes("продюсер"))
        {
            element.classList.add('finalresult');
        }
    });
}

