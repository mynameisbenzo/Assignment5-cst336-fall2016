$(document).ready(function(){});

function chooseQuiz(){
    var selection = $("input[name='quizType']:checked").val();
    console.log(selection);
    if(selection == "math")
    {
        window.location.replace("math.html");
    }
    else if(selection == "science")
    {
        window.location.replace("science.html");
    }
    else if(selection == "english")
    {
        window.location.replace("english.html");
    }
}