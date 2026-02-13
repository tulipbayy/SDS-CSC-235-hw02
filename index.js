const button = document.getElementById("highlightBtn");
const hypotheses = document.querySelectorAll(".hypothesis");

let highlighted = false;

button.addEventListener("click", function() {
    hypotheses.forEach(function(hyp) {
        if (!highlighted) {
            hyp.style.backgroundColor = "#cce5ff";
        } else {
            hyp.style.backgroundColor = "";
        }
    });

    highlighted = !highlighted;
});