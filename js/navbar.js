//** Tried to create a navbar from javascript and it fails  */
let a_array = [];

function navbars() {
    var navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    var a_nav = document.createElement("a");
    a_nav.classList.add("navbar-brand");
    a_nav.href = "#";
    navbar.appendChild(a_nav);
    document.body.appendChild(navbar);
}

//**Dynamic elements of the navbar made using javascript for easier modifing purposes */
//* e prost codul si nu prea e ok cum am code acolo alea 2 parti pt navbar dar cat merge e ok //
function nav_ite() {
    let navbar_items = ["Ce", "bine", "arata", "ma face", "sa imi las", "nevasta"];
    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");
    //**Would ve been usefull to use ForEach instead of For */
    for (var i = 0; i < navbar_items.length / 2; i++) {
        var li = document.createElement("li");
        li.classList.add("nav-item");
        var li_1 = document.createElement("li");
        li_1.classList.add("nav-item");
        var node = document.createTextNode(navbar_items[i]);
        var a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = "#"
        a.appendChild(node);
        li.appendChild(a);
        ul.appendChild(li);
    }
    var element = document.getElementById("first_nav_part");
    element.appendChild(ul);
    var new_ul = document.createElement("ul");
    new_ul.classList.add("navbar-nav");
    for (var i = navbar_items.length / 2; i < navbar_items.length; i++) {
        var li = document.createElement("li");
        li.classList.add("nav-item");
        var li_1 = document.createElement("li");
        li_1.classList.add("nav-item");
        var node = document.createTextNode(navbar_items[i]);
        var a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = "#"
        a.appendChild(node);
        li.appendChild(a);
        new_ul.appendChild(li);
    }
    new_ul.classList.add("ml-auto");
    var middle_element = document.getElementById("middle_nav_bar")
    var new_element = document.getElementById("second_nav_part");
    new_element.appendChild(new_ul);
    console.log(datagrid.length)
}

function clicked() {
    var header = document.getElementById("navbarNav");
    var btns = header.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}


//** Calling the functions */
nav_ite();
clicked();