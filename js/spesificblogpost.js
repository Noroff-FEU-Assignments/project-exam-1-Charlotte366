
    
    const containerBlogs = document.querySelector(".blogs");
    const navtext = document.querySelector(".nav-text");
    const postimg = document.querySelector(".postimg");


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
        
   
    
    containerBlogs.innerHTML = `<div class="posts">
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

    postimg.innerHTML = `
    <img src= "${result._embedded["wp:featuredmedia"][0].source_url}" 
    onclick="onClick(this)">
    `;

    }
    
        getBlogpost();


        function onClick(element) {
            document.getElementById("image-1").src = element.src;
            document.getElementById("modal-1").style.display = "block";
          }













        
     







