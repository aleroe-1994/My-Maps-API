  function initMap(){

    // Map load options
    var parameters = {
      zoom:9,
      center:{lat: 53.4084, lng: -2.9916}
    }

    // Add Map
    var map = new google.maps.Map(document.getElementById('map'), parameters);

    // Marker options Home
    var marker_home = {
      position:{lat: 53.4084, lng: -2.9916},
      map:map,
      icon:'images/A.png',
      draggable:true
    }

    // Add Marker for Home
    var marker_home = new google.maps.Marker(marker_home);

    // Detect and display geolocation e.g. not at home
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You Are Currently Here');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
    // If its not supported in the browser
      handleLocationError(false, infoWindow, map.getCenter());
    }


    // Marker options Bracknell
    var marker_Bracknell = {
      position:{lat: 51.4160,lng: -0.7540},
      map:map,
      animation:google.maps.Animation.BOUNCE,
      icon:'http://maps.google.com/mapfiles/kml/pal3/icon51.png'
    }

    // Add Marker for Bracknell
    var marker_Bracknell = new google.maps.Marker(marker_Bracknell);

    // Marker options Hello Soda
    var marker_soda = {
      position:{lat: 53.4797,lng: -2.2439},
      map:map
    }
    // Add Marker for Hello Soda
    var marker_soda = new google.maps.Marker(marker_soda);

    // Add Info for Hellow Soda
    var SodaInfo = new google.maps.InfoWindow({
      content:'<p1>Hello Soda provide ID verification, fraud prevention and personalisation software solutions to businesses in a variety of industries. Our solutions enable you to leverage unique and alternative data sources to alleviate reliance on traditional data and support more informed decisions.</p1>'
    });

    // Info on click
    marker_soda.addListener('click', function(){
      SodaInfo.open(map, marker_soda);
    });
  }
