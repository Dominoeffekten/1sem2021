'use strict';

let form = document.getElementsByTagName("form")[0]; //from the html file

document.getElementById("send").addEventListener("click", function(e){
    //https://www.valentinog.com/blog/form-data/
    const formData = new FormData(form); //
    const entries = formData.entries(); //
    const data = Object.fromEntries(entries); //
    
    //Make a heading
    let h2 = document.querySelectorAll('.name')[0];
    h2.innerHTML = "";
    h2.innerHTML = data.name; //fill out h2

    //show gender
    document.querySelectorAll(".female")[0].style.display = "none";
    document.querySelectorAll(".male")[0].style.display = "none";
    document.getElementsByClassName(data.gender)[0].style.display = "block";

    //change color
    document.querySelectorAll(".avatarBody")[0].style.fill = "white";
    document.querySelectorAll(".avatarBody")[0].style.fill = data.color;

    //add a background story
    let story = document.querySelectorAll('.bgStory')[0];
    story.innerHTML = " ";
    story.innerHTML = data.bgStory; //fill out p

    //accessories
    //remove them

    let notChecked = document.querySelectorAll('input[type="checkbox"]'); //check checkboxes
    for (var checkbox of notChecked) { 
        document.getElementsByClassName(checkbox.value)[0].style.display = "none";
    };
    //add them
    let checked = document.querySelectorAll('input[type="checkbox"]:checked'); //check checkboxes
    for (var checkbox of checked) { //check if they are checked
        document.getElementsByClassName(checkbox.value)[0].style.display = "block";
    };
});


//reset the form
document.getElementById("reset").addEventListener("click", function(e){
    //Make a heading
    let h2 = document.querySelectorAll('.name')[0];
    h2.innerHTML = "Make an avatar";

    //show gender
    document.querySelectorAll(".female")[0].style.display = "none";
    document.querySelectorAll(".male")[0].style.display = "none";

    //change color
    document.querySelectorAll(".avatarBody")[0].style.fill = "white";

    //add a background story
    let story = document.querySelectorAll('.bgStory')[0];
    story.innerHTML = " ";

    //accessories
    //remove them
    let notChecked = document.querySelectorAll('input[type="checkbox"]'); //check checkboxes
    for (var checkbox of notChecked) { 
        document.getElementsByClassName(checkbox.value)[0].style.display = "none";
    };
});
