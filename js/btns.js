let div_btns = document.getElementById("btns");

var buttons_1 = document.createElement("button");
var buttons_2 = document.createElement("button");
var node1 = document.createTextNode("Button prev");
var node2 = document.createTextNode("Button next");
buttons_1.appendChild(node1);
buttons_2.appendChild(node2);
div_btns.appendChild(buttons_1);
div_btns.appendChild(buttons_2);

var div_border = document.getElementById("border");
var div_ref = document.getElementById("ref");
var div_team = document.getElementById("team");
var div_graph = document.getElementById("graph");
var div_graph2 = document.getElementById("graph2");
var div_molecules = document.getElementById("molecules");

let datagrid = [div_border, div_ref, div_molecules, div_graph, div_graph2, div_team];
var indice = 1;

function plusBtn(x) {
    showDiv(indice += x);
}

function currentDiv(x) {
    showDiv(indice = x);
}

function showDiv(x) {
    if (x > datagrid.length) {
        indice = 1;
    }
    if (x < 1) {
        indice = datagrid.length;
    }
    for (var i = 0; i < datagrid.length; i++) {
        datagrid[i].style.display = 'none';
    }
    datagrid[indice - 1].style.display = 'block';
}

showDiv(indice);

buttons_1.onclick = function() {
    plusBtn(-1);
}
buttons_2.onclick = function() {
    plusBtn(1);
}