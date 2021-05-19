let page = 1
const resultsContainerBlog = document.querySelector(".containerblog");
const ViewMoreButton = document.querySelector(".viewmore")


async function fetchPosts(){

    try {
    const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts?per_page=10&page=" + page + "&_embed=1"
    console.log(url);
    const response = await fetch (url);
    const results = await response.json();
    const TotalPages = await response.headers.get('X-WP-TotalPages');
    console.log(results);
    console.log(TotalPages)

    resultsContainerBlog.innerHTML ="";

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

        // More-button visibility
        //If page number is less than Total Pages, show button
        if (page >= TotalPages) {
            ViewMoreButton.style.display = "none";
        } else {
            ViewMoreButton.style.display = "block";
        }

}

catch (error) {
    console.log(error);
}

}

fetchPosts ();




const viewMore = async () => {
    page++
    await fetchPosts()
}

ViewMoreButton.addEventListener("click",viewMore)