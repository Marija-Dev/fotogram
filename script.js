const dialogRef = document.getElementById("myDialog");

const imagesArray = [
    "./img/thumb1.jpg",
    "./img/thumb2.jpg",
    "./img/thumb3.jpg",
    "./img/thumb4.jpg",
    "./img/thumb5.jpg",
    "./img/thumb6.jpg",
    "./img/thumb7.jpg",
    "./img/thumb8.jpg",
    "./img/thumb9.jpg",
    "./img/thumb10.jpg",
    "./img/thumb11.jpg",
    "./img/thumb12.jpg",
    "./img/thumb13.jpg",
    "./img/thumb14.jpg",
];

const imagesNames = [
    "Herbstlicher Wald",
    "Berge",
    "Strasse",
    "Strand",
    "Fluss",
    "Sonnenuntergang",
    "Polarlichter im Schnee",
    "Palmenweg",
    "Nebliger Wald",
    "Violetter Himmel",
    "Vulkan",
    "Polarlichter",
    "Blitz",
    "Welle"
];

let currentIndex;

//lädt die bilder in browser
function init() {
    renderImg();
}

function renderImg() {
    let contentRef = document.getElementById("slideImages");
    for (let index = 0; index < imagesArray.length; index++) {
        contentRef.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index) {
    return `<button onclick="openDialog(${index})">
                <img class="thumbnails-img" src="${imagesArray[index]}">
            </button>
            `
}

//öffnet dialog, zeigt bild mit name und nummer an
function openDialog(index) {
    let dialogImage = document.getElementById("imageDisplay");
    let dialogImgName = document.getElementById("dialogImgName");
    dialogImgName.textContent = imagesNames[index];
    dialogImage.src = imagesArray[index];
    currentIndex = index;
    dialogRef.showModal();
    dialogRef.classList.add("opened");
    picNumber.textContent = (currentIndex + 1) + "/" + imagesArray.length;
}

//schliesst dialog mit klick auf x-button
function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

//schliesst dialog mit entertaste oder leertaste
function closeWithEnter() {
    document.getElementById("myDialog").close();
}

//zeigt das nächste bild mit name und nummer an
function nextImg() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    document.getElementById("imageDisplay").src = imagesArray[currentIndex];
    document.getElementById("dialogImgName").innerHTML = imagesNames[currentIndex];
    picNumber.innerHTML = (currentIndex + 1) + "/" + imagesArray.length;
}

//geht zum vorherigen bild mit name und nummer zurück
function prevImg() {
    let picNumber = document.getElementById("picNumber");
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    document.getElementById("imageDisplay").src = imagesArray[currentIndex];
    document.getElementById("dialogImgName").innerHTML = imagesNames[currentIndex];
    picNumber.innerText = currentIndex + 1 + "/" + imagesArray.length;
}


//test

function arrowRight() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    document.getElementById("imageDisplay").src = imagesArray[currentIndex];
    document.getElementById("dialogImgName").innerHTML = imagesNames[currentIndex];
    picNumber.innerHTML = (currentIndex + 1) + "/" + imagesArray.length;

}


function arrowLeft() {
   let picNumber = document.getElementById("picNumber");
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    document.getElementById("imageDisplay").src = imagesArray[currentIndex];
    document.getElementById("dialogImgName").innerHTML = imagesNames[currentIndex];
    picNumber.innerText = currentIndex + 1 + "/" + imagesArray.length;
}




function handleKey(event) {
    if (event.key === "ArrowLeft") arrowLeft();
    if (event.key === "ArrowRight") arrowRight();
   
}