var puntaje = 0;
var buenas=0, malas=0, total = 0;

function subir() {
    var txt = document.getElementById("texto");
    var cbuenas = document.getElementById("contB");
    var ctotal = document.getElementById("contT"); 
    if (total<100) {
        puntaje+=20;
        buenas++;
        total++;
        txt.textContent = "Puntaje: "+puntaje;
        cbuenas.textContent = "Buenas: "+buenas;
        ctotal.textContent = "Total: "+total;
    }
}
function bajar() {
    var txt = document.getElementById("texto");
    var cmalas = document.getElementById("contM");
    var ctotal = document.getElementById("contT");
    if (total<100) {
        puntaje-=1.125;
        txt.textContent = "Puntaje: "+puntaje;
        malas++;
        total++;
        cmalas.textContent = "Malas: "+malas;
        ctotal.textContent = "Total: "+total;
    }
    
}

var b = document.getElementById("bad");
var g = document.getElementById("good");
g.onclick = subir;
b.onclick = bajar;

    

