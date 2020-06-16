const createGeoJSONCircle = function(center, radiusInKm, points) {
    const km = radiusInKm;
    const coords = {
        
    }

    const distanceX = km/(111.320*Math.cos(coords.lat*Math))
    let theta, x, y;
    
}


//  function initMap() {
//    // Create the map.
//    var map = new google.maps.Map(document.getElementById("map"), {
//      zoom: 4,
//      center: { lat: 37.09, lng: -95.712 },
//      mapTypeId: "terrain",
//    });

//    // Construct the circle for each value in citymap.
//    // Note: We scale the area of the circle based on the population.
//    for (var city in citymap) {
//      // Add the circle for this city to the map.
//      var cityCircle = new google.maps.Circle({
//        strokeColor: "#FF0000",
//        strokeOpacity: 0.8,
//        strokeWeight: 2,
//        fillColor: "#FF0000",
//        fillOpacity: 0.35,
//        map: map,
//        center: citymap[city].center,
//        radius: Math.sqrt(citymap[city].population) * 100,
//      });
//    }
//  }