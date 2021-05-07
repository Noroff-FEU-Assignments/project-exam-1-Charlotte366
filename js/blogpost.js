const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainerBlog = document.querySelector(".results");






/*
async function fetchPosts() {


    const response = await fetch(corsFix);

    const results = await response.json();

    const posts = results.posts;

    resultsContainer.innerHTML = "";

    console.log(results);
    
    
}
*/

async function fetchArray(){


const response = await fetch (corsFix);

const results = await response.json();

const array = results.array;

resultsContainerBlog.innerHTML ="";

console.log(results);

let html="";

for (let i = 0; i < array.length; i++) {
    console.log(array[i].strArray);
    html +=  `<div class="array">
    <h2><a href="details.html?array=${array[i].strArray}"> ${array[i].strArray} </a></h2>
                <p>id:${array[i].idArray}</p>
                <p>Description: ${array[i].strArrayDescription}</p>
                </div>
                `;


    resultsContainerBlog.innerHTML = html;

}
}



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");





fetchArray();