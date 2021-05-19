
    
    const containerBlogs = document.querySelector(".blogs");
    const navtext = document.querySelector(".nav-text");
    const postimg = document.querySelector(".postimg");


    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    console.log("id:" + id);
    
    const url ="https://myblog.charlotte366.no/wp-json/wp/v2/posts/" + id + "?_embed";
    console.log("url:" + url);
    
    async function getBlogpost() {
        const response = await fetch (url);
        const result = await response.json();
        console.log(result)
        
   
    
    containerBlogs.innerHTML = `<div class="posts">
    <h1> ${result.title.rendered}</h1>
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

    postimg.innerHTML = `
    <img src= "${result._embedded["wp:featuredmedia"][0].source_url}" alt: ${result._embedded["wp:featuredmedia"][0].alt_text}" 
    onclick="onClick(this)">
    `;

    }
    
        getBlogpost();


        function onClick(element) {
            document.getElementById("image-1").src = element.src;
            document.getElementById("modal-1").style.display = "block";
          }













        
     







