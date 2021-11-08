//Styling for index.html


let modal = document.getElementById("myModal");

let emergBtn = document.getElementById('emergency-btn');
emergBtn.addEventListener('click', function dothis(){
    modal.style.display = "block";
});

let settingsBtn = document.getElementById('settings-btn');
settingsBtn.addEventListener('click', function dothis(){
    window.location.href = '/settings.html';
});

let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function dothis(){
    modal.style.display = "none";
});

let cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', function dothis(){
    modal.style.display = "none";
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let dropBtn = document.getElementById("down-icon");
dropBtn.addEventListener('click', myFunction());

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let check1btn = document.getElementById('check1');
let check2btn = document.getElementById('check2');

check1btn.addEventListener('click', function dothis(){
    check2btn.checked = false;
});

check2btn.addEventListener('click', function dothis(){
    check1btn.checked = false;
});