//const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?per_page=4" 

//const images = document.querySelectorAll(".slider img");
//images.forEach(function(image){
    //image.onclick = function(event) {
       // document.querySelector("image-slider").classList.remove("image-slider");
      //  const clickParent = event.target.parentNode;
     //   clickParent.classList.add("image-slider");
 //   }
//})




const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts?per_page=3&_embed=1" 
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;
const resultsContainerBlog = document.querySelector(".LatestPosts");


let length = 3;
let offset = 0;


async function fetchThreePosts() {

try {
const response = await fetch (corsFix + `posts?per_page=${length}&offset=${offset}&_embed`);
const results = await response.json();
resultsContainerBlog.innerHTML ="";
console.log(results);


let html="";

for (let i = 0; i < results.length; i++) {
    html +=  `<figure>
    <a href="spesificblogpost.html?id=${results[i].id}"> <img src= "${results[i]._embedded["wp:featuredmedia"][0].source_url}" />
    </a>
    </figure>
    `;
    resultsContainerBlog.innerHTML = html;
}
}

catch (error) {
    console.log(error);
}
}

fetchThreePosts ()



//KODE
const apiUrl =
    "https://myblog.charlotte366.no/wp-json/wp/v2/";


const buttonPrevious = document.querySelector(".previous");
const buttonNext = document.querySelector(".next");

async function fetchApi() {
    try {
        const data = await fetch(
            apiUrl + `posts?per_page=${length}&offset=${offset}&_embed`
        );
        const json = await data.json();
        console.log(json)

        // Validate Buttons visibility
        if (offset === 0) {
            buttonPrevious.style.display = "none";
        } else {
            buttonPrevious.style.display = "block";
        }
        if (json.length < 3) {
            buttonNext.style.display = "none";
        } else {
            buttonNext.style.display = "block";
        }


    } catch (error) {
        console.log(error);
    }
}

buttonPrevious.addEventListener("click", () => {
    if (offset >= 3) {
        offset -= 3;
    }
    fetchApi(apiUrl);
});
buttonNext.addEventListener("click", () => {
    offset += 3;
    fetchApi(apiUrl);
});

fetchApi(apiUrl);