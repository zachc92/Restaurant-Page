const generateAboutTab = (content) => {
    content.textContent = "";

    const contentDiv = document.createElement("div");
    contentDiv.style.justifyContent = "flex-start";

    const header = document.createElement("h1");
    header.textContent = "About Us";

    const aboutDiv = document.createElement("div");
    const aboutUs = document.createElement("p");
    aboutUs.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    aboutDiv.append(aboutUs);

    contentDiv.append(header, aboutDiv);
    content.appendChild(contentDiv);
};

export { generateAboutTab };