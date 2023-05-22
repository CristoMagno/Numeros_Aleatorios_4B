//Los parametrso necesarios son:
// x = semilla
// a = multiplicador constantante
// c = incremento
// m = modulo
// formula
// x = (a*x+c)mod m = n; x = n/(m-1);

function Lineal() {
    //
    var x = document.getElementById("x").value;
    x = parseInt(x);
    var a = document.getElementById("a").value;
    a = parseInt(a);
    var c = document.getElementById("c").value;
    c = parseInt(c);
    var m = document.getElementById("m").value;
    m = parseInt(m);
    var vueltas  = document.getElementById("vueltas").value;
    vueltas = parseInt(vueltas);
    //validamos que no esten vacios los campos
    if (x == "" || a == "" || c == "" || m == "" || vueltas == "") {
        alert("No debe haber ningun campo vacio");
    } else {
        //empezamos con el codigo anterior
        // x = (a*x+c)mod m = n; x = n/(m-1);
        var n;
        for (let index = 0; index < vueltas; index++) {
            n = (a*x+c)%m;
            
            document.writeln("El valor de a es: "+a+"<br>");
            document.writeln("El valor de x es: "+x+"<br>");
            document.writeln("El valor de m es: "+m+"<br>");
            document.writeln("El valor de n es: "+n+"<br>");
            x = n/(m-1);
            document.writeln("r"+(index+1)+" = "+x+"<br>");
            document.writeln("<br>");
            x = Math.trunc(n);
        }
    }
}