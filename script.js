/**** Display Modal *****/
document.querySelectorAll('.image-container img').forEach(image => {
  image.addEventListener('click', () => {
    document.querySelector('.modal-image').style.display = 'block';
    document.querySelector('.modal-image img').src = image.getAttribute('src');
  });
});

/*** Close Modal When 'X' is Clicked ***/
document.querySelector('.modal-image span').addEventListener('click', () => {
  document.querySelector('.modal-image').style.display = 'none';
})

/*** Close Modal When clicked if Clicked outside***/
window.addEventListener('click', (e) => {
  if(e.target == document.querySelector('.modal-image')){
    document.querySelector('.modal-image').style.display = 'none';
  }
})