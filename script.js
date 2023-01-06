// console.log("tout fonctionne");

//const h1 = document.querySelector("h1")
//h1.style.color = "green" 
// document.querySelector("h1").style.color = "red"
// style
// button.style.color = "red";

// class
// body.classList.add("dark");


// Selecteurs
 const body = document.querySelector("body");
 const h1 = document.querySelector("h1");
 const button = document.querySelector("button");


// Listener
 button.addEventListener("click", function() {
 if (body.classList.contains("light")) {
   body.classList.remove("light");
   body.classList.add("dark");
   button.innerText = "j'ai mal à la tête";
   } else {
    body.classList.add("light");
    body.classList.remove("dark");
    button.innerText = "j'ai mal aux yeux";
  }

 });
