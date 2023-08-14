let notescontainer = document.querySelector(".notes-container");
let createbtn = document.getElementById("create-note");

createbtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let delbtn = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    delbtn.src =
        "https://tse2.mm.bing.net/th?id=OIP.7hwq4q-1gLKQxrBxl0P_nAHaJG&pid=Api&P=0&h=180";
    notescontainer.appendChild(inputBox).appendChild(delbtn);
})