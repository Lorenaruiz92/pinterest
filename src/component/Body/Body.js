

import "./Body.css";

 export default function Body() {
    const bodyContainer = document.createElement("div");
    bodyContainer.className = "body-container";

  const imagesContainer = document.createElement ("ul");
   imagesContainer.className = "images-container";

   bodyContainer.appendChild(imagesContainer);
   

   return bodyContainer;
 }

 