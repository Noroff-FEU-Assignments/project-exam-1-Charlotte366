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


async function fetchThreePosts() {


const response = await fetch (corsFix);

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

fetchThreePosts ()