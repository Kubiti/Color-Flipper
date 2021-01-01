const colors = ["green", "red", "blue", "pink", "voilet", "rgba(133,122,200)", "#f15025"];
let main = document.getElementsByTagName("main")[0], 
button = document.getElementById('btn')
color = document.querySelector('.color');

button.onclick = () => {
    let idx = Math.floor(Math.random() * colors.length);
    main.style.backgroundColor = colors[idx];
    color.innerHTML = colors[idx];
}