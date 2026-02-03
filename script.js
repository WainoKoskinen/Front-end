
function paivitaVarasto() {
    const tehtavat = [];
  
    document.querySelectorAll("#todolist li").forEach(li => {
        
        tehtavat.push(li.firstChild.textContent);
    });
    tallennaTodo(tehtavat);
}


document.getElementById("addBtn").addEventListener("click", function() {
    var syote = document.getElementById("taskInput").value;
    if (syote === "") return; 

    lisaaTehtavaElementti(syote);
    paivitaVarasto(); 
    document.getElementById("taskInput").value = ""; 
});

function lisaaTehtavaElementti(teksti) {
    var uusiRivi = document.createElement("li");
    uusiRivi.textContent = teksti;

    var poistoNappi = document.createElement("button");
    poistoNappi.textContent = "X";
    poistoNappi.onclick = function() {
        uusiRivi.remove();
        paivitaVarasto(); 
    };

    uusiRivi.appendChild(poistoNappi);
    document.getElementById("todolist").appendChild(uusiRivi);
}

window.onload = function() {
    const tallennetut = haeTodo();
    tallennetut.forEach(tehtava => {
        lisaaTehtavaElementti(tehtava);
    });
};


function tallennaTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function haeTodo() {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
}