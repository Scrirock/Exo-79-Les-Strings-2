let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

document.getElementById("index-pomme").innerHTML = pomme.indexOf("p");
document.getElementById("last-index-m").innerHTML = pomme.lastIndexOf('m')

if (pomme.startsWith("Elle")){
    console.log("Elle est belle ma pomme ! Commence par elle")
}

document.getElementById("pomme").innerHTML = pomme.substring(18, 23);

let arrayPomme = pomme.split("");
lettre = 0;
for (lettre of arrayPomme){
    let p = document.createElement("p");
    p.innerHTML = lettre;
    document.getElementById("one-line").append(p);
}

console.log("Les énnoncés sont claires");
