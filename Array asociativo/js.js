
let goles = {
    'Iniesta': 3,
    'Messi': 2,
    'Cristiano': 4,
    'Villa': 0,
    'Falcao': 1
}

alert(goles['Villa']);

for(let i in goles) {
    document.write( i + " " +  goles[i] + " goles" + "<br>");
}
