import { controller } from "./index.js";

const grabElements = (() => {
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const aboutButton = document.querySelector("#about-btn");
    const content = document.querySelector("#content");

    let clickedButton = "home";

    homeButton.addEventListener("click", () => {
        clickedButton = "home";
        controller.generateTab(clickedButton);
    });
    menuButton.addEventListener("click", () => { 
        clickedButton = "menu";
        controller.generateTab(clickedButton);
    });
    aboutButton.addEventListener("click", () => { 
        clickedButton = "about";
        controller.generateTab(clickedButton);
    });

    return { content };

})();

export { grabElements };