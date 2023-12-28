let games = document.querySelector("#games");
let education = document.querySelector("#education");
let wiki = document.querySelector("#wiki");

games.addEventListener("click", function (){
    var gameList = ["https://www.coolmathgames.com/","https://itch.io/games/free/tag-pico-8 ","https://www.lexaloffle.com/pico-8.php"];
    var random = gameList[Math.floor(Math.random() * gameList.length)];
    window.open(random);
});

wiki.addEventListener("click", function (){
    var wikipediaList = ["https://en.wikipedia.org/wiki/Elon_Musk","https://en.wikipedia.org/wiki/Harry_Potter","https://en.wikipedia.org/wiki/NASA","https://en.wikipedia.org/wiki/Minecraft","https://en.wikipedia.org/wiki/Lamborghini"];
    var random = wikipediaList[Math.floor(Math.random() * wikipediaList.length)];
    window.open(random);
});

education.addEventListener("click", function (){
    var educationList = ["https://www.ixl.com/","https://www.khanacademy.org/","https://quizlet.com","https://kids.nationalgeographic.com/","https://www.coolmathgames.com/"];
    var random = educationList[Math.floor(Math.random() * educationList.length)];
    window.open(random);
});



