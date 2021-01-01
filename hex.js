const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let main = document.getElementsByTagName("main")[0], 
button = document.getElementById('btn')
colorname = document.querySelector('.color');

button.onclick = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let idx = Math.floor(Math.random() * hex.length);
        color += hex[idx];
    }
    main.style.backgroundColor = color;
    colorname.innerHTML = color;
}