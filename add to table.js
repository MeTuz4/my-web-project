function saveChanges(){

}

function onSubmitFun(){
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
