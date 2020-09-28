//** Generate the header of the table */
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

//** Generate the contents of the table */
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

//** Render in html all the mods that have been made */
function Team_render() {
    let profile_infos = [
        { name: "Monte Falco", picture: 1658, link: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", picture: 1654, link: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", picture: 1654, link: "Parco Foreste Casentinesi" }
    ];
    let table = document.querySelector("table");
    let data = Object.keys(profile_infos[0]);
    generateTableHead(table, data);
    generateTable(table, profile_infos);
}


Team_render();