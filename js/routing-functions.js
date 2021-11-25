

let reroute = document.getElementsByClassName("reroute-btn");

for(var i = 0; i < reroute.length; i++){
    reroute[i].addEventListener('click', function(){
        sessionStorage.setItem('route', "true");
        location = "/Chicago_Commuter/index.html";
    })
}