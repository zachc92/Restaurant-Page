import "./styles.css"
import { grabElements } from "./dom.js"
import { generateHomeTab } from "./homeTab.js";
import { generateMenuTab } from "./menuTab.js";
import { generateAboutTab } from "./aboutTab.js";

const controller = (() => {
    generateHomeTab(grabElements.content);

    const generateTab = (tab) => {
        if(tab === "home"){
            generateHomeTab(grabElements.content);
        } else if(tab === "menu"){
            generateMenuTab(grabElements.content);
        } else if(tab === "about"){
            generateAboutTab(grabElements.content);
        }
    };

    return { generateTab };

})();

export { controller };