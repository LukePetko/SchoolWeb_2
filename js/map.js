initMap() {
  var myLatLng = {lat: 48.145927, lng: 17.133887};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'GJH!!'
  });
}
