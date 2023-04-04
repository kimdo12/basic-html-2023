var slides = document.querySelectorAll("#slides>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showslides(current);
prev.onclick = prevslide;
next.onclick = nextslide

function showslides(n){
    for(var i =0; i<slides.length-1; i++ ) {
        slides[i].style.display ="none";
    }
    slides[n].style.display ="block";
}
function prevslide(){
    if(current>0)current -=1;
    else current =slides.length-1;
    showslides(current);
}

function nextslide(){
    if(current<slides.length)current +=1;
    else current =0;
    showslides(current);
}

// const tab1 =document.querySelector("input[name=tabs]").checked;
// const tab1 =document.getElementById("tab1");
// const tab2 =document.getElementById("tab2");
// console.log(tab1.checked);

// if(tab1.checked='true')
//     notice.style.display="block";
//     document.getElementById("gallery").style.display="none";
    // if(tab2.checked='true')
    // notice.style.display="none";
    // document.getElementById("gallery").style.display="block";







