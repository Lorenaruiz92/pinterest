import "./style.css";
import {Header} from "./component/Header/Header";
import Body from "./component/Body/Body";
import printImages from "./component/Utils/printImages";


const app = document.querySelector('#app')
app.append(Header(), Body());

document.addEventListener('DOMContentLoaded', () => {
    printImages()
}

)


