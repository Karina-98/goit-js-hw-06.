import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemUl = document.querySelector('.gallery');



const marupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="galerry__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src=
"${preview}" data-source="${original}" alt="${description}"></a></li>`;
}).join('');

itemUl.insertAdjacentHTML('beforeend', marupGallery)

itemUl.addEventListener('click', onOpenModal);

function onOpenModal(event) { 
    event.preventDefault();
   
    const currentItem = event.target;
    

    if (currentItem.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${currentItem.dataset.source}" width="800" height="600">
`)
    
    instance.show()
    window.addEventListener('keydown', onCloseModalClick);

}



function onCloseModalClick(event) {
    const openInstance = document.querySelector(".basicLightbox")
    if (event.code === "Escape") {
        openInstance.remove();
        // console.log(openInstance);
    }
    window.removeEventListener('keydown', onCloseModalClick);
   
   
}

console.log(galleryItems);

