

let policebtn = document.getElementById("notifyPolice");
let contactbtn = document.getElementById("notifyContacts");
let bothbtn = document.getElementById("notifyBoth");

let notifyArr = [policebtn, contactbtn, bothbtn];

// for(var i = 0; i < notifyArr.length; i++){
//     notifyArr[i].addEventListener('click', function(){
//         notifyArr[i].style.border="3px solid black"
//     });
// }

policebtn.addEventListener('click', function(){
    policebtn.style.borderWidth="3px"
    contactbtn.style.borderWidth="1px"
    bothbtn.style.borderWidth="1px"
});

contactbtn.addEventListener('click', function(){
    policebtn.style.borderWidth="1px"
    contactbtn.style.borderWidth="3px"
    bothbtn.style.borderWidth="1px"
});

bothbtn.addEventListener('click', function(){

    policebtn.style.borderWidth="1px"
    contactbtn.style.borderWidth="1px"
    bothbtn.style.borderWidth="3px"
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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