function nameInArray() {
    var elements = document.querySelectorAll("td");
    elements = [].slice.call(elements);

    var arrOfNames = [];
    for (i = 0; i < elements.length; i++) {
        arrOfNames.push(prompt("Input name:"));
    }
    elements.forEach(function(elem, i) {
        elem.innerText = arrOfNames[i].toUpperCase();
    });
}
window.onload = nameInArray;
