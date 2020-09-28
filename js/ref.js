function Render_ref() {
    //**Read the content of a file and display it as p's in web */
    fetch('../ref.txt')
        .then(response => response.text())
        .then(data => {
            var text = data.split('\n');
            let ref = document.getElementById('ref');
            for (let i = 0; i < text.length; i++) {
                let p = document.createElement("p");
                let br = document.createElement("br");
                let node = document.createTextNode((i + 1) + " " + text[i]);
                p.appendChild(node);
                ref.appendChild(p);
                ref.appendChild(br);
            }
        });
}
Render_ref();