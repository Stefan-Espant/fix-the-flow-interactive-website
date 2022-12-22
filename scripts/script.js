const body = document.querySelector('body')
const allButtons = document.querySelectorAll('.subcat-btn')
const allContent = document.querySelectorAll('.content-item')

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        allContent.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')

    })
});


//stappen plan voor een actie of microinteractie
//1: selecteer het element in een variabele (queryselector)
//2: event toevoegen (addEventlistener)
//3: class aan een element toevoegen (classlist)

//const increaseFontSize = document.querySelector('p')

function fontSize() {
    const textincrease = document.querySelector("#fontIncrease")
    textincrease.classList.toggle('text-large')
    // textincrease.style.fontSize = textincrease.style.fontSize === '200%' ? '100%' : '200%'
};

const contrastTrigger = document.querySelector('.contrast-trigger');

contrastTrigger.addEventListener('click', () => {
    body.classList.toggle('dark-contrast')
});

// Variabelen declareren
const emotionButtons = document.querySelector('.emotion-group-buttons')
const emotionReaction = document.querySelector('.reaction-text')

// Event listeners
emotionReaction.addEventListener('click', switchSections)

// Functies voor afhandeling
function switchSections(){
    emotionReaction.classList.remove('opacity-zero')
    emotionButtons.classList.add('opacity-zero','fade-left')

}

// Back to top button selecteren
const backToTopButton = document.querySelector('.back-2-top')

// Whenever end users scroll down 10px from the beginning of the web page, then back to top button visible
window.onscroll = function() {
    scrollfunction()
};

// Functie voor afhandeling
function scrollfunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.remove('opacity-zero')
    } else {
        backToTopButton.classList.add('opacity-zero')
    }
}

function Scrollback_topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//Checklist 
const collapseButtons = document.querySelectorAll('.collapse-button')
const collapseForms = document.querySelectorAll('.checklist-overview')
const chechlistBoxes = document.querySelectorAll('[type="checkbox"]')

collapseButtons.forEach((collapseButton) => {
    collapseButton.addEventListener('click', function() {
        const parentElement = this.closest('.checklist-overview-content');
        const targetElement = parentElement.querySelector('.checklist-overview');
        const btnElement = parentElement.querySelector('.collapse-button')

        targetElement.classList.toggle('checklist-collapse')
        btnElement.classList.toggle('rotate180')

        openChecklistSection()
        
    })

});

function openChecklistSection(){
    collapseForms.classList.toggle('checklist-collapse')
}

