console.log("vi har länkat html!!!");

const buttonClicked = document.getElementById('getNewJoke')
//Här skriver vi vad som ska hända när vi klickar på knappen


buttonClicked.addEventListener('click', function (event) {
// Här anpropar vi funktionen för att hämta skämtet

getNewJoke(); 

}); 

//new jokes funtion

function getNewJoke(){
fetch("https://api.jsonbin.io/v3/b/639859b72d0e0021081bb567")
.then(function(response){
    return response.json();
})
.then((response) => {
    let data = response;
    console.log(data);

let random = data.record[Math.floor(Math.random() * data.record.length)];
console.log(random);

document.querySelector('.jokes').innerHTML = random.setup + "<br /><br />" + random.punchline;
})

.catch(function (err) {
    console.log('Error' + err);
    document.querySelector('.jokes').innerHTML = "Oops! Vi kan inte hämta ditt skämt!";
})

};

//End function getNewJoke();