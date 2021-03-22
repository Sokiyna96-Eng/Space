var favoritePlanet= prompt("Welcome to the Space webpage, can you provide us with your favorite planet ?");

function getFavoritePlanet(useranswer){


    console.log(useranswer);
    while(useranswer!=='mercury' && useranswer!=='mars')
    {useranswer = prompt('Kindly chose between mercury and mars ')

};


}

getFavoritePlanet(favoritePlanet);

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


console.log(con1 +"  "+ con2);


