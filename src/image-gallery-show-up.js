// This part of the code contains the dispalying of the image gallery and changing the body background

const selectButton = document.querySelector('.select-button');
const imageOptions = document.querySelector('.image-options');
const acutalImages = document.querySelectorAll(".bg-images");
const body = document.querySelector("body");

selectButton.addEventListener("click", () =>
{
    imageOptions.classList.toggle("show");
    console.log("logging in");
} )

acutalImages.forEach(img => {
    img.addEventListener("click", (event) => 
    {
        console.log(event.target.src);
        body.style.background = `url(${event.target.src})`;
    })
});