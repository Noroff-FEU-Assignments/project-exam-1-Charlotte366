let page = 1
const resultsContainerBlog = document.querySelector(".containerblog");
const showMoreButton = document.querySelector(".showmore")


async function fetchPosts(){

    try {
    const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts?per_page=10&page=" + page + "&_embed=1"
    console.log(url);
    const response = await fetch (url);
    const results = await response.json();
    const TotalPages = await response.headers.get('X-WP-TotalPages');
    console.log(results);
    console.log("Total number of pages:" + TotalPages)

    let html="";


    for (let i = 0; i < results.length; i++) {
    html =  `<div class="posts">
    <h2><a href="spesificblogpost.html?id=${results[i].id}"> ${results[i].title.rendered} </a></h2>
    <p>Date published:${results[i].date}</p>
    <div class = "content">
    <img src= "${results[i]._embedded["wp:featuredmedia"][0].source_url}" alt: ${results[i]._embedded["wp:featuredmedia"][0].alt_text} "/>
    </div>
    </div>

                `;

    resultsContainerBlog.innerHTML += html;
    }

        // More-button visibility
        //If page number is less than Total Pages, show button
        if (page >= TotalPages) {
            showMoreButton.style.display = "none";
        } else {
            showMoreButton.style.display = "block";
        }

}

catch (error) {
    console.log(error);
}

}

fetchPosts ();




const showMore = async () => {
    page++
    await fetchPosts()
}

showMoreButton.addEventListener("click",showMore)