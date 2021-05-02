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

    let html ="";

    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].strPosts);
        html += `<div class="posts">
            <h2><a href="spesificblogpost.html?posts=${posts[i].strPosts}"> ${posts[i].strPosts} </a></h2>
                        <p>id:${posts[i].idPosts}</p>
                        <p>Description: ${posts[i].strPostsDescription}</p>
                        </div>
                        `;


        resultsContainer.innerHTML = html;

    }
    
    
}


fetchPosts();
