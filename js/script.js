const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");






async function fetchPosts() {


    const response = await fetch(corsFix);

    const results = await response.json();

    const posts = results.posts;

    resultsContainer.innerHTML = "";

    console.log(results);
    
    
}

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



fetchPosts();


