import "./Cards.css";

export default function Cards(imageData){

   const cardsContainer = document.createElement("li");
    cardsContainer.className = "cards";

    const image = document.createElement("img");
     image.src = `${imageData.urls.small}`;
     image.className = "images";

    const infoImage = document.createElement("p");
      infoImage.className = "info-image";
      infoImage.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const likes = document.createElement("p");
      likes.className = "cards-likes";
      likes.textContent = ` ${imageData.likes}❤️`;

      const photo = document.createElement("img");
      photo.src = `${imageData.user.profile_image.large}`;
      photo.className = "photo";

      const date = document.createElement("p");
      date.className = "date";
      date.textContent = `${imageData.created_at}`;
    

   cardsContainer.append(image, infoImage, likes, photo, date);
  


     return cardsContainer;
}
