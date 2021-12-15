(function(){
    startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        pageLoadTime="Page load time is " + (((new Date).getTime() - startTime) / 1000) + " Seconds";
        console.log(pageLoadTime);

        var timeBlock = document.createElement("div");
        timeBlock.className = "container page-load-timer__element container-fluid";
        timeBlock.textContent = pageLoadTime + " ";


        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-default btn-primary";
        deleteBtn.textContent ='Закрыть';
        timeBlock.appendChild(deleteBtn);

        var printBlock = document.getElementsByClassName("page-load-timer");
        printBlock[0].appendChild(timeBlock);


        deleteBtn.addEventListener("click", (event) => {
            deleteBtn.parentElement.remove();
        });
    });
})();