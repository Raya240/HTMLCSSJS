window.onload=function() {
   const startBtn = document.getElementById("#startBtn");
    startBtn.addEventListener("click", doMoveCell);
    
    const inputBox = document.querySelector("#inputBox");
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') 
           doMoveCell(); 
    });
}

function doMoveCell() {
    makeTable();;
    curLoc = 0;

    curLoc = Math.floor(Math.random() * (size * size));
    console.log(curLoc);

    tdNodes[curLoc].style.backgroundColor = "pink";

    window.onkeydown = function(event) {
        if (event.key < 37 || event.key > 40) return;
        
          tdNodes[curLoc].style.backgroundColor = "white";

          let row = Math.floor(curLoc / size);
          let col = curLoc % size;

            switch(event.key) {
                case 'Arrowleft':
                    if (col > 0) curLoc -= 1;
                    else curLoc += (size - 1);
                 break;
                case 'ArrowRight':
                    if (col < size - 1) curLoc += 1;
                    else curLoc -= (size - 1);
                    break;
                case 'ArrowUp':
                    if (row > 0) curLoc -= size;
                    else curLoc += (size * (size - 1));
                    break;
                case 'ArrowDown':
                    if (row < size - 1) curLoc += size;
                    else curLoc -= (size * (size - 1));
                    break;
                
    }

    tdNodes[curLoc].style.backgroundColor = "pink";
}

function makeTable() {
    const inputBox = document.querySelector("#inputBox");
    if (inputBox.value == "") {
        return;
    }

    size = Number(inputBox.value);

    const displayArea = document.querySelector(".displayArea");
    let tableHTML = '<table>' + ('<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size) + '</table>'
    displayArea.innerHTML = tableHTML;
    tdNodes = document.querySelectorAll('td');

    randomLocText();
}
}


