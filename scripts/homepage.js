let curRow = 0;
let curCol = 0;

function createProjectTile(title, description) {
    const tileDiv = document.createElement("a");
    const tileTitle = document.createElement("p");
    const tileDescription = document.createElement("p");
    const projectsContainer = document.getElementById("projects-container");

    tileDiv.className = "project-tile";
    tileTitle.className = "project-tile-title";
    tileDescription.className = "project-tile-description";

    tileTitle.textContent = title;
    tileDescription.textContent = description;

    tileDiv.appendChild(tileTitle);
    tileDiv.appendChild(tileDescription);

    if (curCol === 0) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "project-row";
        rowDiv.id = "project-row-" + curRow;
        projectsContainer.appendChild(rowDiv);
    }
    projectsContainer.querySelector("#project-row-" + curRow).appendChild(tileDiv);

    curCol++;
    if (curCol === 3) {
        curRow++;
        curCol = 0;
    }
}