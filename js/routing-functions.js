
let timebtn = document.getElementById('timesort-btn');
let safetybtn = document.getElementById('safetysort-btn');


timebtn.addEventListener('click', function(){
    timebtn.style.background = "#DCDCDC";
    safetybtn.style.background = "white";
});

safetybtn.addEventListener('click', function(){
    safetybtn.style.background = "#DCDCDC";
    timebtn.style.background = "white";
});