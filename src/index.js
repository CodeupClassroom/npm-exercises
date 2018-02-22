const $ = require('jquery');
const captains = require("./data.js");
const hello = require("./say-hello.js");

$("body").append("<h1>" + hello() + "</h1>");

const sayHello = () => {
    console.log("Hi, Everybody!");
};

sayHello();
console.log("omg, es6 in old browsers!");

$("body").css({
    "background-color": "salmon",
    "color": "teal"
});

$("body").append("<h1>YOU GUYS ROCK!</h1>");

$("body").append("<h2>For real, rock!</h2>");
$("body").append("<h2>For real, rock!</h2>");

$("body").append("<ul>");
captains.map(captain => {

    $("body").append("<li>" + captain.name + " is the captain of the " + captain.ship + "</li>");
});
$("body").append("</ul>");

