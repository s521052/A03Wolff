//Made by Ben Wolff with help from jsmadeeasy.com's example of a similar type of calorie counter


 $(function(){

     $("img").click(function(){
         $(this).fadeOut();
     });
    
     $("#resetAllValues").click(clearTheForm);

     $("#calculate").click(numMiles);
 });

document.write(Date());

document.getElementById("grade").innerHTML = "the grade will go here...";

function clearTheForm(myForm){
     $("#distance").val("0");
     $("#weight").val("0");
     $("#result").html("0");
     $("#displayGrade").html("You need to enter values to get a grade");
}

function numMiles(){ 
     var calc = ($("#multiplier").html() * (document.getElementById('distance').value) * (document.getElementById('weight').value));
     $("#result").html(calc);
    if(calc <= 50){
        $("#displayGrade").html("F. Boo! You can do better friend! Keep training!");
    }
    else if(calc <= 250){
        $("#displayGrade").html("D... Not bad! Keep running and you'll burn even more!");
    }
    else if(calc <= 500){
        $("#displayGrade").html("C... Great job! You're burning a lot of calories!");
    }
    else if(calc <= 750){
        $("#displayGrade").html("B... Run forest run!!! You're amazing!");
    }
    else if(calc <= 1000){
        $("#displayGrade").html("A... Outstanding! You are becoming an A+ runner!");
    }
    else if(calc > 1000){
        $("#displayGrade").html(" A+++... WOOOOOOOOOOOOOOOOOOOOW! Run forest run!");
    }
 }

function setIntensity(intensity) {
    $("#multiplier").html(intensity);
}