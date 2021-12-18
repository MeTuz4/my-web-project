function onSubmitFun() {
    var tableRow = document.createElement("tr");
    var singer = document.createElement("td");
    singer.textContent = document.getElementById("singer").value;
    tableRow.appendChild(singer);
    var group = document.createElement("td");
    group.textContent = document.getElementById("group").value;
    tableRow.appendChild(group);
    var song = document.createElement("td");
    song.textContent = document.getElementById("song").value;
    tableRow.appendChild(song);
    var printBlock = document.getElementById("music_table");
    printBlock.appendChild(tableRow);
    saveChanges();
}

function clearAll(bool) {
    var array = document.getElementById("music_table").getElementsByTagName("tr");
    while (array.length > 0) {
        array[0].remove();
    }
    if (bool) {
        saveChanges();
    }
}

function saveChanges() {
    var array = document.getElementById("music_table");
    var tdInfo = [];
    tdInfo.push(array.getElementsByTagName("tr"));
    var inputStorageTable = [];
    for (const tdInfoElement of tdInfo[0]) {
        var trElement = [];
        trElement.push(tdInfoElement.getElementsByTagName("td"));
        var inputRow = [];
        inputRow.push(trElement[0][0].textContent);
        inputRow.push(trElement[0][1].textContent);
        inputRow.push(trElement[0][2].textContent);
        inputStorageTable.push(inputRow);
    }
    localStorage.setItem('inputStorageTable', JSON.stringify(inputStorageTable));
}

window.addEventListener('load', () => {
    var inputStorageTable = JSON.parse(localStorage.getItem('inputStorageTable'));
    if (inputStorageTable === null) {
        saveChanges();
        return;
    }
    var defaultEl = "[[\"Виктор Цой\",\"КИНО\",\"Перемен\"],[\"Константин Кинчев\",\"Алиса\",\"Инок, воин и шут\"]]";
    if (localStorage.getItem('inputStorageTable').toString() === defaultEl) {
        saveChanges();
    }
    clearAll();
    for (let i = 0; i < inputStorageTable.length; i++) {
        const tmpElem = document.getElementById("tableEl-template");
        var clone = tmpElem.content.cloneNode(true);
        clone.querySelectorAll("td")[0].textContent = inputStorageTable[i][0];
        clone.querySelectorAll("td")[1].textContent = inputStorageTable[i][1];
        clone.querySelectorAll("td")[2].textContent = inputStorageTable[i][2];
        var printBlock = document.getElementById("music_table");
        printBlock.appendChild(clone);
    }
    saveChanges();
});