console.log("Hola Mundo")
function PromesEjem(){
 return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log(new Date());
        resolve("La promesa se cumplio")
    },2000)

 } )

}

console.log("Se imprime antes")


async function nombrefuncion(){
    const result = await PromesEjem();
    console.log(result);
    console.log("Fin de Js", new Date());

}

nombrefuncion();