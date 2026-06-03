
function givemark(){
    var maths = parseInt(document.getElementById("mathss").value);
    var physics = parseInt(document.getElementById("physicss").value);
    var chemistry = parseInt(document.getElementById("chemistryy").value);
    var score = document.querySelector("p");
    
    score.innerHTML=("YOUR CUTOFF IS:"+(maths+physics/2+chemistry/2));
    score.classList.toggle("toggle_p");
}  









