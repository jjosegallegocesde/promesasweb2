const URL="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US";

const TOKEN="Bearer BQCm2GXEL8K7WAbGshdXp_H5j8sh4IkV9XgDu5irqirOSmFrktuS4LJdAjmDYz7z2LUI42tvog6Te9swFmJr8FSb-bH_9V8Es7HDecJXhpBipz_oS42BYC-IxKs92b3cE7clZHi-QMZhaKGbkCU"

const parametros={
    method:"GET",
    headers:{
        Authorization:TOKEN
    }
}

fetch(URL,parametros)
    .then(function(respuesta){
        return(respuesta.json());
    })
    .then(function(respuesta){
        depurarDatos(respuesta)
    })
    .catch(function(error){
        console.log(error)
    })


function depurarDatos(respuesta){

    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.name);
        console.log(cancion.name);
    });

}