const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?_embed" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainerBlog = document.querySelector(".containerblog");


async function fetchPosts(){


const response = await fetch (corsFix);

const results = await response.json();

resultsContainerBlog.innerHTML ="";

console.log(results);



let html="";



for (let i = 0; i < results.length; i++) {
    html +=  `<div class="posts">
    <h2><a href="spesificblogpost.html?id=${results[i].id}"> ${results[i].title.rendered} </a></h2>
    <p>Date published:${results[i].date}</p>
    <div class = "content">
       <img src= "${results[i]._embedded["wp:featuredmedia"][0].source_url}" />
    </div>
    </div>
                `;

    resultsContainerBlog.innerHTML = html;

}
}

fetchPosts ()