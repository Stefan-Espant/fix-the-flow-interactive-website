<!-- > _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) -->

<!-- Geef je project een titel en schrijf in één zin wat het is -->
# Handleiding voor partners Vervoerregio Amsterdam

## User Story
<!-- Schrijf de user story waar je aan hebt gewerkt  -->
> Als gebruiker wil ik een soort interactieve checklist kunnen bijhouden over de wettelijke toegankelijkheidsrichtlijnen voor mijn eigen website

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

<img width="1512" alt="Schermafbeelding 2022-12-09 om 12 18 34" src="https://user-images.githubusercontent.com/89298385/209146597-6329c576-35de-4919-8204-fd62b793a694.png">
<img width="1512" alt="Schermafbeelding 2022-12-09 om 12 18 34" src="https://user-images.githubusercontent.com/89298385/209147022-850eb4a9-822b-4764-b730-666776289e04.png">
https://stefan-espant.github.io/fix-the-flow-interactive-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De interactie die ik had ontworpen, ontwikkeld en getest was een back to top button die verschijnt wanneer de gebruiker een stuk naar beneden scrolt. 

### html
```html
  <a class="back-2-top opacity-zero" href="#logo">
    <svg width="20" height="20" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Terug naar het begin</title>
      <path
        d="M23.3333 26H4.66667C1.64698 26 -0.283772 22.7821 1.13725 20.1176L10.4706 2.61765C11.9765 -0.205882 16.0235 -0.205883 17.5294 2.61765L26.8627 20.1176C28.2838 22.7821 26.353 26 23.3333 26Z"
        fill="" />
    </svg>
  </a>
```

### css
```css
.back-2-top {
  width: 3em;
  aspect-ratio: 1/1;
  background-color: var(--c-light);
  color: var(--c-primary);
  border-radius: var(--border-radius-round);
  bottom: 1.5em;
  right: 1.5em;
  padding: 0em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  float: right;
  z-index: 100;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2); 
}


.back-2-top svg {
  fill: var(--c-primary);
  transition: 0.4s ease-in-out;
}


.back-2-top:hover {
  background-color: var(--c-light);
  color: var(--c-light);
  border-radius: var(--border-radius-default);
}


.back-2-top:focus {
  background-color: var(--c-light);
  color: var(--c-light);
  border-radius: var(--border-radius-default);
}


.back-2-top:focus svg {
  fill: var(--c-info);
  transition: 0.4s ease-in-out;
}


.back-2-top:focus-within {
  background-color: var(--c-light);
  color: var(--c-light);
  border-radius: var(--border-radius-default);
}


.back-2-top:active {
  background-color: var(--c-light);
  color: var(--c-light);
  border-radius: var(--border-radius-default);
}


.back-2-top:active svg {
  fill: var(--c-info);
  transition: 0.4s ease-in-out;
}


.back-2-top:hover svg {
  fill: var(--c-info);
  transition: 0.4s ease-in-out;
}


.back-2-top:focus {
  border: 0.2em solid var(--c-info);
  padding: 0;
}
```

### javascript
```js
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
 ```

## Bronnen

[docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
