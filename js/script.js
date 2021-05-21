
const resultsContainerBlog = document.querySelector(".LatestPosts");
const arrowRight = document.querySelector(".next")
const arrowLeft = document.querySelector(".previous")
let page = 1


async function fetchThreePosts() {

try {
const url = "https://myblog.charlotte366.no/wp-json/wp/v2/posts?per_page=3&page=" + page + "&_embed=1"
const response = await fetch (url)
const results = await response.json();
const TotalPages = await response.headers.get('X-WP-TotalPages');
resultsContainerBlog.innerHTML ="";
console.log(results);
console.log("url:" + url)
console.log("Total number of pages:" + TotalPages)


let html="";

for (let i = 0; i < results.length; i++) {
    html +=  `<figure class = "carousel">
    <a href="spesificblogpost.html?id=${results[i].id}">
    <img src= "${results[i]._embedded["wp:featuredmedia"][0].source_url}" alt:" $"{results[i]._embedded["wp:featuredmedia"][0].alt_text} />
    </a>
    <p>${results[i].title.rendered}</p>
    </figure>
    `;
    resultsContainerBlog.innerHTML = html;
}

        // Arrows visibility
        //If page number is more than 1, show previous arrow
        if (page != 1) {
            arrowLeft.style.display = "block";
        } else {
            arrowLeft.style.display = "none";
        }

        //If page number is less than Total Pages, show next arrow.
        if (page >= TotalPages) {
            arrowRight.style.display = "none";
        } else {
            arrowRight.style.display = "block";
        }


}

catch (error) {
    console.log(error);
}
}

fetchThreePosts ();



//click right arrow and load three next posts
async function next() {
    page++
    await fetchThreePosts()
    }
    
    arrowRight.addEventListener("click",next);



//click left arrow and load three previous posts
async function previous() {
    page--
    await fetchThreePosts()
    }
    
    arrowLeft.addEventListener("click",previous);

