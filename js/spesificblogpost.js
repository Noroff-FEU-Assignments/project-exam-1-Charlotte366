/*
const containerSpesific = document.querySelector(".blogs");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const results = params.get("results");

console.log(results);

const url ="https://myblog.charlotte366.no/wp-json/wp/v2/posts" + results;

console.log(url);

const proxy = "https://noroffcors.herokuapp.com/"; 

*/




/*
const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts/?" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;



async function fetchArray(){


const response = await fetch (corsFix);

const results = await response.json();



console.log(results);

}

fetchArray()

*/

/*
const url = 'https://myblog.charlotte366.no/wp-json/wp/v2/posts/59'
const containerSpesific = document.querySelector(".blogs");

async function getBlogpost() {
	const response = await fetch (url);
	const result = await response.json();
	console.log(result)
	
	
containerSpesific.innerHTML = result.title.rendered

}

	getBlogpost();

    */

    const containerSpesific = document.querySelector(".blogs");
    const navtext = document.querySelector(".nav-text");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    console.log(id);
    
    const url ="https://myblog.charlotte366.no/wp-json/wp/v2/posts/" + id + "?_embed";
    console.log(url);
    
    const proxy = "https://noroffcors.herokuapp.com/"; 
    const corsFix = proxy + url;
    
    
    
    
    async function getBlogpost() {
        const response = await fetch (url);
        const result = await response.json();
        console.log(result)
        
   
    
    containerSpesific.innerHTML = `<div class="posts">
    <h2> ${result.title.rendered}</h2>
    <p>Date published:${result.date}</p>
    ${result.content.rendered}
                </div>
                `;

    navtext.innerHTML =
    `You are here: 
    <a href= "index.html">Home</a>
    <a href= "listBlogpost.html"> - Blogposts</a>
    - ${result.title.rendered}
    `;  

    
    }
    
        getBlogpost();
        
     







