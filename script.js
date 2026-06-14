let images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    if (e.target.parentElement && e.target.parentElement.tagName == "A") {
      return;
    }
    
    let src = e.target.src;
    let alt = e.target.alt;

    document.getElementById('image-pop-up').src = src;
    document.getElementById('image-pop-up').alt = alt;

    document.getElementById('image-pop-up-container').classList.remove('invisible-pop-up');
    document.getElementById('image-pop-up-container').classList.add('visible-pop-up');
  });
})

document.getElementById('image-pop-up-container').addEventListener('click', (e) => {
  document.getElementById('image-pop-up-container').classList.remove('visible-pop-up');
  document.getElementById('image-pop-up-container').classList.add('invisible-pop-up');
});