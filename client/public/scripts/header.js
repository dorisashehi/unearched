const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerLogo = document.createElement("img");
headerLogo.src = "../logo.png";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "UnEarthed";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const headerButton = document.createElement("button");
headerButton.textContent = "Home";

headerButton.addEventListener("click", () => {
  window.redirect("/");
});

headerRight.appendChild(headerButton); //append button to right container
headerContainer.appendChild(headerLeft); //append left el to header
headerContainer.appendChild(headerRight); //append right el to header
console.log(header);
header.appendChild(headerContainer); //append header container to header
