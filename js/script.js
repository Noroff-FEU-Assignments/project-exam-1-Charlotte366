const images = document.querySelectorAll(".slider img");
images.forEach(function(image){
    image.onclick = function(event) {
        document.querySelector("image-slider").classList.remove("image-slider");
        const clickParent = event.target.parentNode;
        clickParent.classList.add("image-slider");
        const clickParent = event.target.parentNode
        clickParent.classList.add("image-slider")
    }
})