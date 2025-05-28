/********************** Botón  que te lleva a la página productos **********************/
$(document).ready(function(){
  $('#productosButton').on("click",function(){
    window.open("HTML/Producto.html");
  });
  $('#productosButton').mouseenter(function() {
    $(this).css({'background-color': 'red', 'color': 'white'});
  });
  $("#productosButton").mouseleave(function(){
    $(this).css({"background-color":"aqua", "color":"black"});
  });
});
/********************** Botón  que te lleva a la página productos **********************/


/********************** Botón  de contacto **********************/
$(document).ready(function(){
  $('#contactoButton').mouseenter(function() {
    $(this).css({'background-color': 'red', 'color': 'white'});
  });
  $("#contactoButton").mouseleave(function(){
    $(this).css({"background-color":"aqua", "color":"black"});
  });
});
/********************** Botón  de contacto **********************/


/********************** Galería **********************/
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('#modal-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImageIndex = 0;

// Mostrar la imagen en el modal al hacer clic en una foto
if (gallery){
  gallery.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG'){
      const src = e.target.getAttribute('src');
      modalImage.setAttribute('src', src);
      modal.style.display = 'flex';
    } 
    else if (e.target.tagName === 'VIDEO'){
      const src = e.target.getAttribute('src');
      modalImage.setAttribute('src', src);
      modal.style.display = 'flex';
    }
  });
}

// Cerrar el modal al hacer clic en la "X"
if (gallery){
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Navegación a la imagen anterior
if (gallery){
  prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0){
      currentImageIndex = gallery.children.length - 1;
    }
    const src = gallery.children[currentImageIndex].getAttribute('src');
    modalImage.setAttribute('src', src);
  });
}

// Navegación a la imagen siguiente
if (gallery){
  nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= gallery.children.length){
      currentImageIndex = 0;
    }
    const src = gallery.children[currentImageIndex].getAttribute('src');
    modalImage.setAttribute('src', src);
  });
}
/********************** Galería **********************/