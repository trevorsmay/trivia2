const questionThree = [
    "What is your favorite color?",
    "What is the capital of Assyria?",
    "What goes black, white, black, white, black, white?",
    "What is the airspeed velocity of an unladen swallow?"
];



let deathAnswers = "Arrrrrrrgggggggg";
let score = 0;
let answerArray = [];
let name;



for (var i = 0; i < questionThree.length; i ++) {

    let deathQuestion = questionThree[Math.floor(Math.random() * questionThree.length)];

    $("#question3").text(deathQuestion);
  

};


$("#answerForm").hide();


$("#toggleFormButton").on("click", function(event) {

    event.preventDefault();

    $("#toggleFormButton").hide();
    
    $("#answerForm").show();

    $("#card-two").hide();

    $("#card-three").hide();

});

$("#toggleFormButton1").on("click", function(event) {

    event.preventDefault();

    $("#card-two").show();

    $("#card-three").hide();

});

$("#toggleFormButton2").on("click", function(event) {

    event.preventDefault();

    $("#card-three").show();

});

$("#toggleFormButton3").on("click", function(event) {

    let answerInput;
    let favColors = ("blue", "green", "yellow", "purple", "red");
    let arthurAnswer = "What do you mean, an African or a European swallow?";

    

    event.preventDefault();

    if (answerInput === favColors ) {

        alert("Right, off you go!")

    } else {
        (answerInput === arthurAnswer) 
        alert("Well...I don't know...AAAAARRRRRRRRRRRRRRRGGGGGHHHH!!!")

     } 
    //else  {
    //     (answerInput !== 1) 
       
    // }  alert("ARRRRRRHHHHHHGGGGGG!")


});














