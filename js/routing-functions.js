

let reroute = document.getElementsByClassName("reroute-btn");

for(var i = 0; i < reroute.length; i++){
    reroute[i].addEventListener('click', function(){
        console.log(sessionStorage.route);
        sessionStorage.route = true;
        location = "/Chicago_Commuter/index.html";
    })
}