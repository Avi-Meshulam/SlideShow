var sources = [
    "Images/Central Park, New York City.jpg",
    "Images/Dubai - United Arab Emirates.jpg",
    "Images/Eiffel Tower - Paris, France.jpg",
    "Images/Genoa.jpg",
    "Images/Green field.jpg",
    "Images/Heian shrine.jpg",
    "Images/Lake.jpg",
    "Images/Lake2.jpg",
    "Images/Lake3.jpg",
    "Images/Moscow, Russia.jpg",
    "Images/New York City.jpg",
    "Images/Peyto Lake, Canada.jpg",
    "Images/ViewPoint.jpg"
];

var slides = Array(sources.length);
var slidesAmount = 5;
var selectedIndex;
var firstIndex;

window.addEventListener("load", function () {
    initElements();
});

function initElements() {

    initSlidesArray();

    selected = document.getElementById("selected");
    selector = document.getElementById("selector");

    firstIndex = 0;
    selectedIndex = 0;

    showSlides();
    changeSelection(0);
}

function initSlidesArray() {
    for (var index = 0; index < slides.length; index++) {
        slides[index] = document.createElement("img");
        slides[index].style.width = 99 / slidesAmount + "vw";
        slides[index].style.height = "20vh";
        slides[index].setAttribute("src", sources[index]);
        slides[index].setAttribute("alt",
            sources[index].substring(sources[index].lastIndexOf("/") + 1, sources[index].lastIndexOf(".")));
        slides[index].setAttribute("index", index);
        slides[index].style.boxSizing = "border-box";
        slides[index].onclick = function () {
            changeSelection(Number(this.getAttribute("index")));
        };
    }
}

function showSlides() {
    // Remove all slides
    removeAllElements(selector, "img");

    // Add slides
    for (var count = 0; count < slidesAmount; count++) {
        var index = (firstIndex + count) % slides.length;
        selector.appendChild(slides[index]);
    }
}

function removeAllElements(div, tagName) {
    var elements = div.getElementsByTagName(tagName);
    var amount = elements.length;
    for (var count = 0; count < amount; count++) {
        div.removeChild(elements[0])
    }
}

function showSelected() {
    removeAllElements(selected, "img");
    var image = document.createElement("img");
    image.src = slides[selectedIndex].src;
    image.className = "fade";
    image.style.width = "99vw";
    image.style.height = "80vh";
    selected.appendChild(image)
}

function changeSelection(newIndex) {
    slides[selectedIndex].style.border = "";
    selectedIndex = newIndex;
    slides[selectedIndex].style.border = "4px solid yellow";
    showSelected();
}

function moveSlides(steps) {
    firstIndex = (firstIndex + steps) % slides.length;
    if (firstIndex < 0) {
        firstIndex += slides.length;
    }
    showSlides();

    newSelectedIndex = (selectedIndex + steps) % slides.length
    if (newSelectedIndex < 0) {
        newSelectedIndex += slides.length;
    }
    changeSelection(newSelectedIndex);
}

