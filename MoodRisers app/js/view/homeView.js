
 const list = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  container.className = "bg-light";

  
  button.type = "button";
  button.innerHTML = "Next";
  button.className = "btn btn-dark";
  

  list.style = `display: flex`;
  list.className = `text-center`; 
 
      const item = document.createElement("div");

function render() {
  const container = document.querySelector("#container");
  container.innerHTML = ""; //removes the previous elements

 
      item.className = `col text-black bg-light mb-3" style="max-width: 18rem;`;
      item.innerHTML = `
      <div>
      <form id="main">
          <center><div class="mb-3" id="searchbar">
            <h2 for="exampleInputPassword1" class="form-label">Welcome dear friend, how are you felling today?</h2>
            <br>
            <br>
            <input type="text" id="prompt">
          </div>
          <center><div class="col-md-1">
              <button class="btn btn-outline-info" id="button">Submit</button></center>
          </div>
        </form>
  </div>`;

      list.appendChild(item);
    

  container.appendChild(list);
  container.appendChild(buttonContainer);
 
    buttonContainer.appendChild(button);

    $('#button').on('click', function() {
      const prompt = document.getElementById('prompt').value;
      window.location.hash =`/result/${prompt}`;
    
    
  })
   
   
}

export default { render };