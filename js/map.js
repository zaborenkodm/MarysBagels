var map;
var mapPos = {lat: 59.954926, lng: 30.214310}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapPos,
        zoom: 15
    });
    var contentString = "<p><strong>Mary's Bagels.</strong></p>" + "<br>" +
        "<p>С.-Петербург, Капитанская ул., 4</p>" + "<br>" +
        "<p>Время работы:</p>" +
        "<p>пн - пт   10:00 - 22:00,</p> " + "<p>сб - вс   11:00 - 23:00</p>" + "<br>" +
        "<p>Тел: +7 (911) 926-25-51</p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var marker = new google.maps.Marker({
        position: mapPos,
        map: map,
        icon: 'icon/location-pin.png',
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });
}