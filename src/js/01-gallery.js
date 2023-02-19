import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);
const cartContainer = document.querySelector('.gallery');
// console.log(cartContainer)
cartContainer.addEventListener('click', onCardsContainerClick)
const cardsMarkup = createCardMarkup(galleryItems);
cartContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createCardMarkup( element){ 
    return element.map(({preview, original, description})=>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join(" ");}
    
// }console.log(createCardMarkup)
const instance =new SimpleLightbox('.gallery a', { sourceAttr : "href"});
instance.on("show.simplelightbox");
function onCardsContainerClick(el){
    // console.log(el.target.parentNode)
    el.preventDefault()
 if (el.target.nodeName !== 'IMG'){
    return;
 }
//  console.log(el.target.dataset.source)

    // instance.show();
   
    window.addEventListener("keydown", (el)=>{
    if (el.code === "Escape") {
        instance.close();}
    })
 
}

// function blockStandartAction(el){
//     el.preventDefault()
// }
