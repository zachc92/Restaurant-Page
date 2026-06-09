const generateHomeTab = (content) => {
    content.textContent = "";

    const contentDiv = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = "Zach's Restaurant";

    const testimonyDiv = document.createElement("div");
    const testimony = document.createElement("p");
    const testimonyName = document.createElement("p");
    testimony.textContent = "Zach's has the best steak! The atmosphere and customer service make you feel like you are sitting in the middle of a ranch, eating a freshly butchered steak! This is exactly the kind of place that I like to return to again and again."
    testimonyName.textContent = "-Definitely Not Zach";
    testimonyName.style.fontStyle = "italic";
    testimonyName.style.textAlign = "right";
    testimonyDiv.append(testimony, testimonyName);

    const hoursDiv = document.createElement("div");
    const hoursHeader = document.createElement("h3");
    const hours = document.createElement("ul");
    hoursHeader.textContent = "Hours:"
    hours.innerHTML = `
    <li>Sunday: 8am - 8pm</li>
    <li>Monday: 8am - 8pm</li>
    <li>Tuesday: 8am - 8pm</li>
    <li>Wednesday: 8am - 8pm</li>
    <li>Thursday: 8am - 8pm</li>
    <li>Friday: 8am - 8pm</li>
    <li>Saturday: 8am - 8pm</li>
    `;
    hoursDiv.append(hoursHeader, hours);

    const locationDiv = document.createElement("div");
    const location = document.createElement("p");
    locationDiv.style.width = "80%";
    location.textContent = "123 Fake Street, Atlanta, GA";
    location.style.textAlign = "center";
    locationDiv.appendChild(location);


    contentDiv.append(header, testimonyDiv, hoursDiv, locationDiv);
    content.appendChild(contentDiv);
};

export { generateHomeTab };