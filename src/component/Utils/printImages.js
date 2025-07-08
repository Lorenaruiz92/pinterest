import fetchApi from "./fetchApi";

export default async function printImages(query){

const bodyContainer = document.querySelector(`.images-container`);

if(bodyContainer) bodyContainer.innerHTML= "";


try {
    const result = await fetchApi(query);
    result.forEach(image => {
        const newCard = cards(image);

        bodyContainer.appendChild(newCard)
    });
    
} catch (error) {
    console.log(error)
}

}