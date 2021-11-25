

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

let modal = document.getElementById("myModal");

let contactBtn = document.getElementById('contactButtonStyle');
contactBtn.addEventListener('click', function dothis(){
    modal.style.display = "block";
});

let submitBtn = document.getElementById('submit-btn');
let contactInput = document.getElementById('contactInput');
let contactList = document.getElementById('contactList');

if(sessionStorage.getItem('contactList') == null){
    sessionStorage.setItem('contactList', JSON.stringify(['Mom']));
}

if(sessionStorage.getItem('contactList') == null){
    
}
else{
    contacts = JSON.parse(sessionStorage.getItem('contactList'))
    for(var i = 0; i < contacts.length; i++){
        addContact(contacts[i])
    }
}

function addContact(input){
    let a = document.createElement('a');
    let i = document.createElement('i')
    let i2 = document.createElement('i')
    i.setAttribute('class', 'fa fa-user');
    i2.setAttribute('class', 'fa fa-minus-circle')
    i2.style.float = 'right';
    i2.style.marginTop = '6px';
    i2.style.color = '#666666';
    i2.addEventListener('click', function(){
        a.remove();
    });
    a.setAttribute('href', '#');
    a.innerText = input;
    a.prepend(i);
    a.append(i2);
    contactList.appendChild(a);
}

submitBtn.addEventListener('click', function(){
    modal.style.display = "none";
    input = contactInput.value.charAt(0).toUpperCase() + contactInput.value.slice(1);
    contactInput.value = '';
    addContact(input);
    contacts.push(input);
    sessionStorage.setItem('contactList', JSON.stringify(contacts))

    var nodes = Array.prototype.slice.call(document.getElementById('contactList').children );
    console.log(nodes);
});


let cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', function dothis(){
    modal.style.display = "none";
});




