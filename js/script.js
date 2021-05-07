const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?per_page=4" 

const images = document.querySelectorAll(".slider img");
images.forEach(function(image){
    image.onclick = function(event) {
        document.querySelector("image-slider").classList.remove("image-slider");
        const clickParent = event.target.parentNode;
        clickParent.classList.add("image-slider");
        const clickParent = event.target.parentNode;
        clickParent.classList.add("image-slider");
    }
})