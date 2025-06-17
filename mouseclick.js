let size; //테이블블
let curLoc; //현재 위치
let tdNodes;
window.onload = function() {
    const startBtn = document.getElementById("#startBtn");
    startBtn.addEventListener("click", doMouseClick);
    
    const inputBox = document.querySelector("#inputBox");
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') 
           doMouseClick(); 
    });
}

function doMouseClick() {
     const inputBox = document.querySelector("#inputBox");
     if (inputBox.value == "") {
        return;
     }

     size = Number(inputBox.value);

     const displayArea = document.querySelector(".displayArea");

     let tableHTML = '<table>' +('<tr>'+'<td></td>'.repeat(size) +'</tr>').repeat(size) + '</table>'
     displayArea.innerHTML = tableHTML;
     const tdNodes = document.querySelectorAll('td');

     curLoc = 0;
     randomLocText();

}

function randomLocText() {
  
    tdNodes[curLoc].innerText = "";
    // tdNodes[curLoc].addEventListener("click", randomLocText)
    tdNodes[curLoc].onclick = "";

    curLoc = Math.floor(Math.random() * (size * size));
    console.log(curLoc)

    
    
    tdNodes[curLoc].innerText = "안녕^^";
    // tdNodes[curLoc].addEventListener("click", randomLocText)
    tdNodes[curLoc].onclick = randomLocText;
}