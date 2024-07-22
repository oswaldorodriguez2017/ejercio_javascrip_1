
function calcular() {
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;

    if (b === "") {
        alert("Base es requerido");
        return;
    }

    
    if (h === "") {
        alert("Altura es requerido");
        return;
    }    

    let area = b * h;
    document.getElementById("resultado").value = area;

}

function limpiar() {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
}