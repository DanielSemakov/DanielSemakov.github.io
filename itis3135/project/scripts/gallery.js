const images = document.querySelectorAll(".gallery-photo > img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const imageContainer = document.getElementById("enlarged-img-container");

const enlargeImage = (event) => {
    //Make image container visible
    imageContainer.style.visibility = "visible";

    //Display the image that was clicked on.
    var enlargedImage = document.getElementById("enlarged-img");
    enlargedImage.src = event.target.src;
};

images.forEach((image) => image.addEventListener("click", enlargeImage));


const exitImgContainer = () => {
    imageContainer.style.visibility = "hidden";
};

const goToNextImg = () => {
    var enlargedImage = document.getElementById("enlarged-img");

    //Find index of image in imagesArr whose src matches the src of the current enlargedImage
    const imagesArr = [...images];
    const indexCurrentImg = imagesArr.findIndex((img) => img.src === enlargedImage.src);

    //Set the enlargedImage src to the src of the next image in the array. Or if the enlargedImage is the last 
    // image in the array, set its src to the first image in the array.
    if (indexCurrentImg === imagesArr.length - 1) {
        enlargedImage.src = imagesArr[0].src;
    } else {
        enlargedImage.src = imagesArr[indexCurrentImg + 1].src;
    }
};

const goToPrevImg = () => {
    var enlargedImage = document.getElementById("enlarged-img");

    //Find index of image in imagesArr whose src matches the src of the current enlargedImage
    const imagesArr = [...images];
    const indexCurrentImg = imagesArr.findIndex((img) => img.src === enlargedImage.src);

    //Set the enlargedImage src to the src of the next image in the array. Or if the enlargedImage is the last 
    // image in the array, set its src to the first image in the array.
    if (indexCurrentImg === 0) {
        enlargedImage.src = imagesArr[imagesArr.length - 1].src;
    } else {
        enlargedImage.src = imagesArr[indexCurrentImg - 1].src;
    }
};

/**
 * When the image container is open, if the user clicks anywhere on the screen except the arrow buttons,
 * it exits the image container. Otherwise, if the next button is clicked, go to the next image. If the back 
 * button is clicked, go to the previous image.
 */
imageContainer.addEventListener("click", (event) => {
    if (event.target === nextBtn) {
        goToNextImg();

    } else if (event.target === prevBtn) {
        goToPrevImg();

    } else {
        exitImgContainer();
    }
});






