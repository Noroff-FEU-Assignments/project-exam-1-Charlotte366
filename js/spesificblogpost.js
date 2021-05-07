/*
const containerSpesific = document.querySelector(".blogs");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const results = params.get("results");

console.log(results);

const url ="https://myblog.charlotte366.no/wp-json/wp/v2/posts" + results;

console.log(url);

const proxy = "https://noroffcors.herokuapp.com/"; 

const corsFix = proxy + url;

*/


const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/59" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainerBlog = document.querySelector(".results");

async function fetchDetails(){


    const response = await fetch (corsFix);
    
    const results = await response.json();
    
    
    console.log(results);
}

fetchDetails();



