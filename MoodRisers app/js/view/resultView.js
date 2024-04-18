const list = document.createElement("div");
  container.className = "bg-light";

  list.style = `display: flex`;
  list.className = `text-center`; 
 
  const item = document.createElement("div");

function render(message) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; //removes the previous elements
 console.log(message);
      item.className = `col text-black bg-light mb-3" style="max-width: 18rem;`;
      item.innerHTML = `
      <div>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${message}?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>`;

      list.appendChild(item);
    

  container.appendChild(list);


   
   
}

export default { render };