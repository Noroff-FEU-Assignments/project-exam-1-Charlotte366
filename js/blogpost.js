const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainerBlog = document.querySelector(".results");


async function fetchArray(){


const response = await fetch (corsFix);

const results = await response.json();


resultsContainerBlog.innerHTML ="";

console.log(results);

let html="";

for (let i = 0; i < results.length; i++) {
    console.log(results[i].title);
    html +=  `<div class="post">
    <h2><a href="spesificblogpost.html?id=${results[i].id}"> ${results[i].title.rendered} </a></h2>
    <p>Date:${results[i].date}</p>
    <p>${results[i].content.rendered}</p>
                </div>
                `;


    resultsContainerBlog.innerHTML = html;

}
}


fetchArray();


