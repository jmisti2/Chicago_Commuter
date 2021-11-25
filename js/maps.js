var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAK6sTsieht6yFkf-2DDBTnglM1LnBUEK0&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {lat: 41.878113, lng: -87.629799},
      disableDefaultUI: true,
      mapId: '5df879b1815c9bab'
    });

    directionsRenderer.setMap(map);

    function calcRoute(){
      var request = {
        origin: {lat: 41.858530, lng: -87.620870},
        destination: {lat: 41.884223, lng: -87.632195},
        travelMode: 'WALKING'
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
        }
      });
    }

    console.log(sessionStorage.getItem('route'));
    
    if(sessionStorage.getItem('route') == "true"){
      console.log('test')
      calcRoute();
    }

    var mark1 = new google.maps.Marker({
      position: {lat: 41.898120, lng: -87.6389900},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    var infowindow1 = new google.maps.InfoWindow({
      content: '<div id="content"><header style = "font-weight: bold;">Activity: 0.2 mi</header><div>Armed Robbery</div><div style="color: green;">Tip: Bring Pepper Spray</div></div>',
    });

    mark1.addListener("click", () => {
      infowindow1.open({
        anchor: mark1,
        map,
        shouldFocus: false,
      });
    });

    var mark2 = new google.maps.Marker({
      position: {lat: 41.874035, lng: -87.623872},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    mark2.addListener("click", () => {
      infowindow1.open({
        anchor: mark2,
        map,
        shouldFocus: false,
      });
    });

    var mark3 = new google.maps.Marker({
      position: {lat: 41.867196, lng: -87.625564},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    mark3.addListener("click", () => {
      infowindow1.open({
        anchor: mark3,
        map,
        shouldFocus: false,
      });
    });

    var mark4 = new google.maps.Marker({
      position: {lat: 41.856073, lng: -87.632023},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    mark4.addListener("click", () => {
      infowindow1.open({
        anchor: mark4,
        map,
        shouldFocus: false,
      });
    });

    var mark5 = new google.maps.Marker({
      position: {lat: 41.871350, lng: -87.642061},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    mark5.addListener("click", () => {
      infowindow1.open({
        anchor: mark5,
        map,
        shouldFocus: false,
      });
    });

    var mark6 = new google.maps.Marker({
      position: {lat: 41.884387, lng: -87.649268},
      map,
      icon: {
        url: "./images/warning.svg",
        scaledSize: new google.maps.Size(20,20)
      },
    });

    mark6.addListener("click", () => {
      infowindow1.open({
        anchor: mark6,
        map,
        shouldFocus: false,
      });
    });

    const infowindow = new google.maps.InfoWindow({
      content: '<div id="content"><header style = "font-weight: bold;">Current Location</header></div>',
    });

    let currentLocation = new google.maps.Marker({
      position: {lat: 41.858530, lng: -87.620870},
      map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#1473E6",
        strokeWeight: 3,
        strokeColor: "white",
        fillOpacity: 1,
      },
      title: "Current Location",

    });

    currentLocation.addListener("click", () => {
      infowindow.open({
        anchor: currentLocation,
        map,
        shouldFocus: false,
      });
    });

};
  
// Append the 'script' element to 'head'
document.head.appendChild(script);

