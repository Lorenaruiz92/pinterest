
import fetchApi from "../Utils/fetchApi";
import printImages from "../Utils/printImages";
import "./Header.css";
 export const Header = () => {
    const header = document.createElement("header");
    const app = document.querySelector("#app");
    const logo = document.createElement("img");
    logo.src = "https://www.logobean.com/images/pinterest-logo.png";
    logo.alt = "logo pinterest";
    logo.className = "logo";

    
    const button = document.createElement("button");
    button.className = "BtnInicio";
    button.innerText = "Inicio";

    const menu = document.createElement ("p");
    menu.className = "Menu";
    menu.textContent = "Explorar";

    const icon = document.createElement ("p");
    icon.className = "Icono";
    icon.textContent = "Crear";

    const buscador = document.createElement ("input");
    buscador.className = "Buscador";
    buscador.placeholder = "🔎  Buscar... ";
    fetchApi()
    const alert = document.createElement ("img");
    alert.src = "https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096279_640.png";
    alert.alt = "icono alerta";
    alert.className = "alert";


    header.append(logo,button,menu,icon,buscador,alert);
    app.append(header);

    buscador.addEventListener(`keydown`, async (e) => {
            if(e.key == "Enter"){
               printImages(e.target.value);
               e.target.value = ''
             }
             
 })
       return header
    }
         
