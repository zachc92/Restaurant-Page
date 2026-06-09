import "./styles.css"
// import { grabElements } from "./dom.js"
import { generateHomeTab } from "./homeTab.js";
import { generateMenuTab } from "./menuTab.js";
import { generateAboutTab } from "./aboutTab.js";

const controller = (() => {
    const content = document.querySelector("#content")
    
    generateHomeTab(content);

    const generateTab = (tab) => {
        if(tab === "home"){
            generateHomeTab(content);
        } else if(tab === "menu"){
            generateMenuTab(content);
        } else if(tab === "about"){
            generateAboutTab(content);
        }
    };

    return { generateTab };

})();

export { controller };
import "./dom.js";