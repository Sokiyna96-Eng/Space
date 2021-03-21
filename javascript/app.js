var favoritePlanet= prompt("Welcome to the Space webpage, can you provide us with your favorite planet ?");

while(favoritePlanet!=='mercury' && favoritePlanet!=='mars')
{favoritePlanet = prompt('Kindly chose between mercury and mars ')};

var numberOfpictures = prompt(" How many pictures you would like to see");

var pictures = '';
var total = '';

if(favoritePlanet=="mercury")
{ pictures='<img src="Messenger_s_iridescent_Mercury_pillars.jpg"width=250px>'; alert( "Great choice")
}else if(favoritePlanet=="mars"){pictures='<img src="OSIRIS_Mars_true_color.jpg"width=250px>'; alert("Cool")};

console.log(pictures);


for (var i=0; i < numberOfpictures; i++){
    total += pictures;
   

    console.log(total, i);

};

i++;
i= i+1;

document.write(total, i)



var con1=" Thank you for visiting our website"
var con2=", you can contact us on the following email space@gmail.com"


document.write(con1 +"  "+ con2)



