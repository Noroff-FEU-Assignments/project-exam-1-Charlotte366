const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?" 

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
    console.log(results[i].title);
    html +=  `<div class="posts">
    <h2><a href="spesificblogpost.html?id=${results[i].id}"> ${results[i].title.rendered} </a></h2>
    <p>Date:${results[i].date}</p>
    <div class="item"> ${results[i].content.rendered}</div>
    
                </div>
                `;


    resultsContainerBlog.innerHTML = html;


}
}


fetchPosts();


