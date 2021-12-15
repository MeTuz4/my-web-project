function onSubmitFun(){
    var tableRow = document.createElement("tr");
    var singer = document.createElement("td");
    singer.textContent = document.form.form_singer;
    tableRow.appendChild(singer);

    var group = document.createElement("td");
    tableRow.appendChild(group);

    // var song = document.createElement("td");
    // song.textContent = document.form.form_song;
    // tableRow.appendChild(song);

    var printBlock = document.getElementsByClassName("page-load-timer");
    printBlock[0].appendChild(timeBlock);


    deleteBtn.addEventListener("click", (event) => {
        deleteBtn.parentElement.remove();
    });
    // var val = singer.value;
    // singer.value = "";
    // if (val.length > 0){
    //     const tmpElem = document.getElementById("main-todo-table-tbody__tmpl");
    //     var clone = tmpElem.content.cloneNode(true);
    //     clone.querySelectorAll("td")[0].textContent = val;
    //
    //     var printBlock = document.getElementById("tbody-lab5");
    //     printBlock.appendChild(clone);
    // }



    // var group = document.form.form_group;
    //
    //
    //
    // if (val.length > 0){
    //     const tmpElem = document.getElementById("main-todo-table-tbody__tmpl");
    //     var clone = tmpElem.content.cloneNode(true);
    //     clone.querySelectorAll("td")[0].textContent = val;
    //
    //     var printBlock = document.getElementById("tbody-lab5");
    //     printBlock.appendChild(clone);
    // }
    saveChanges();
}
