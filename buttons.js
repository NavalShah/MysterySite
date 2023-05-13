function gameSite(){
    var gameList = ["https://www.coolmathgames.com/","https://itch.io/games/free/tag-pico-8 ","https://www.lexaloffle.com/pico-8.php"];
    location.href = "http://" + gameList[Math.floor (Math.random()*gameList.length)];
    return location.href;
}
function wikipediaSite(){
    var wikipediaList = ["https://en.wikipedia.org/wiki/Elon_Musk","https://en.wikipedia.org/wiki/Harry_Potter","https://en.wikipedia.org/wiki/NASA","https://en.wikipedia.org/wiki/Minecraft","https://en.wikipedia.org/wiki/Lamborghini"];
    location.href = "http://" + wikipediaList[Math.floor (Math.random()*wikipediaList.length)];
    return location.href;
}
function educationSite(){
    var educationList = ["https://www.ixl.com/","https://www.khanacademy.org/","https://quizlet.com","https://kids.nationalgeographic.com/","https://www.coolmathgames.com/"];
    location.href = "http://" + educationList[Math.floor (Math.random()*educationList.length)];
    return location.href;
}
