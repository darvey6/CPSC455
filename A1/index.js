function setSize() {
    let size = 0;
    let randomNum = Math.floor(Math.random() * 10);
    for (let i = 0; i < randomNum; i++) {
        size += 10;
    }
    return size;
}

function moveVertical() {
    let catPicture = document.getElementById('picture');
    if (catPicture) {
        catPicture.style.top = setSize() + 'px';
    }
}

function moveHorizontal() {
    let catPicture = document.getElementById('picture');
    if (catPicture) {
        catPicture.style.left = setSize() + 'px';
    }
}


function clearInput() {
    let form = document.querySelector('#inputForm');
    form.reset();
}

let i = 0;
let txt = 'Welcome';
let speed = 125;

let data = '[{"name":"beach", "url":"./Images/beach.jpg"}, {"name":"fountain", "url":"./Images/fountain.jpg"}]';
const obj = JSON.parse(JSON.parse(JSON.stringify(data)));
let nameText;
let h1;
let img;
function load(){
    function imageLoad(){
        h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(obj[0].name));
        document.getElementById("cardBox").appendChild(h1);

        img = document.createElement('img');
        img.src = obj[0].url;
        document.getElementById("cardBox").appendChild(img);


        h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(obj[1].name));
        document.getElementById("cardBox").appendChild(h1);
        img = document.createElement('img');
        img.src = obj[1].url;
        document.getElementById("cardBox").appendChild(img);
    }
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typeWriterEnter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    imageLoad();
    typeWriter();
}


 let imageCount = 1;

let temp;
function add() {
    document.getElementById('addButton').onclick = function () {
        h1 = document.createElement('h1');
        nameText = document.getElementById('inputName').value;
        h1.appendChild(document.createTextNode(nameText));
        document.getElementById("cardBox").appendChild(h1);

        imageCount += 1;
        let img;
        img = document.createElement('img');
        img.src = document.getElementById('inputURL').value;
        document.getElementById("cardBox").appendChild(img);
        temp = JSON.parse(data);
        temp.push({ name: nameText, url: img.src });
        data = JSON.stringify(temp);
    }
}

function deleteCards() {
    let myobj = document.getElementById("cardBox");
    myobj.remove();
    let div;
    div = document.createElement('div');
    div.id = "cardBox"
    document.getElementById("cardBoxContainer").appendChild(div);
    data = '[]';
    imageCount = 0;
}