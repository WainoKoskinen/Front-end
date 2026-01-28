document.getElementById('colorBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
});


document.getElementById("addBtn").addEventListener("click", function() {
    
   
    var syote = document.getElementById("taskInput").value;

    
    var uusiRivi = document.createElement("li");
    
   
    uusiRivi.textContent = syote;

   
    var poistoNappi = document.createElement("button");
    poistoNappi.textContent = "X";
   

   
    poistoNappi.onclick = function() {
        uusiRivi.remove();
    };

    
    uusiRivi.appendChild(poistoNappi);
    document.getElementById("todolist").appendChild(uusiRivi);
});