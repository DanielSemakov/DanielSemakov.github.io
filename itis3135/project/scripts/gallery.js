const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.createElement('div');
const lightboxImage = document.createElement('img');
const leftArrow = document.createElement('span');
const rightArrow = document.createElement('span');

lightbox.className = 'lightbox';
lightboxImage.className = 'lightbox-img';
leftArrow.className = 'arrow left-arrow';
rightArrow.className = 'arrow right-arrow';
leftArrow.innerHTML = '&#10094;';
rightArrow.innerHTML = '&#10095;';

lightbox.appendChild(lightboxImage);
lightbox.appendChild(leftArrow);
lightbox.appendChild(rightArrow);
document.body.appendChild(lightbox);

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImage.src = galleryImages[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex = currentIndex + direction;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    lightboxImage.src = galleryImages[currentIndex].src;
}

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        openLightbox(i);
    });
}

lightbox.addEventListener('click', closeLightbox);

leftArrow.addEventListener('click', function(e) {
    e.stopPropagation();
    changeImage(-1);
});

rightArrow.addEventListener('click', function(e) {
    e.stopPropagation();
    changeImage(1);
});
