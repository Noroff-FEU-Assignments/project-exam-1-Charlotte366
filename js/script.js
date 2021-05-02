const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts" 

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const newjacketsContainer = document.querySelector(".results");




async function fetchPosts() {


    const response = await fetch(corsFix);

    const results = await response.json();

    const posts = results.posts;

    newjacketsContainer.innerHTML = "";

    console.log(results);

    let html = "";

    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].strCategory);
        html += `<div class="category">
            <h2><a href="details.html?posts=${posts[i].strCategory}"> ${posts[i].strCategory} </a></h2>
                        <p>id:${posts[i].idCategory}</p>
                        <p>Description: ${posts[i].strPostsDescription}</p>
                        </div>
                        `;


        resultsContainer.innerHTML = html;

    }



}

fetchPosts();
