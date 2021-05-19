function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }

  
  const url ="https://myblog.charlotte366.no/wp-json/wp/v2/posts/59?_embed"
  const container1 = document.querySelector(".container1");
  const containerSpesific = document.querySelector(".blogs");


  async function getBlogpost() {
    const response = await fetch (url);
    const result = await response.json();
    console.log(result);


    containerSpesific.innerHTML =
    `<div class="posts">
    <h2> ${result.title.rendered}</h2>
    <p>Date published:${result.date}</p>
    ${result.content.rendered}
                </div>
                `;

    container1.innerHTML = `
    <img src= "${result._embedded["wp:featuredmedia"][0].source_url}" style="max-width:100%;cursor:pointer" 
    onclick="onClick(this)">
    `;


  }

    getBlogpost()