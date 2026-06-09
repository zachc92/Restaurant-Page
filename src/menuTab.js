const generateMenuTab = (content) => {
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Menu";

    const menuItems = document.createElement("div");
    menuItems.style.justifyContent = "flex-start";

    const menuItemOne = document.createElement("div");
    const menuItemOneName = document.createElement("h3");
    const menuItemOneDescription = document.createElement("p");
    menuItemOne.style.width = "80%";
    menuItemOneName.textContent = "Steak";
    menuItemOneDescription.textContent = "12oz. New York Strip\nBaked Potato & Grilled Zucchini";
    menuItemOneDescription.style.fontStyle = "italic";
    menuItemOneDescription.style.textAlign = "center";
    menuItemOneDescription.style.whiteSpace = "pre-line";
    menuItemOne.append(menuItemOneName, menuItemOneDescription);

    const menuItemTwo = document.createElement("div");
    const menuItemTwoName = document.createElement("h3");
    const menuItemTwoDescription = document.createElement("p");
    menuItemTwo.style.width = "80%";
    menuItemTwoName.textContent = "Salmon"
    menuItemTwoDescription.textContent = "Grilled or Baked\nRisotto & Broccoli";
    menuItemTwoDescription.style.fontStyle = "italic";
    menuItemTwoDescription.style.textAlign = "center";
    menuItemTwoDescription.style.whiteSpace = "pre-line";
    menuItemTwo.append(menuItemTwoName, menuItemTwoDescription);

    const menuItemThree = document.createElement("div");
    const menuItemThreeName = document.createElement("h3");
    const menuItemThreeDescription = document.createElement("p");
    menuItemThree.style.width = "80%";
    menuItemThreeName.textContent = "Chicken al Pastor"
    menuItemThreeDescription.textContent = "Grilled\nServed with Pineapple & Achiote Marinade";
    menuItemThreeDescription.style.fontStyle = "italic";
    menuItemThreeDescription.style.textAlign = "center";
    menuItemThreeDescription.style.whiteSpace = "pre-line";
    menuItemThree.append(menuItemThreeName, menuItemThreeDescription);

    menuItems.append(header, menuItemOne, menuItemTwo, menuItemThree)
    content.append(menuItems);
};

export { generateMenuTab };