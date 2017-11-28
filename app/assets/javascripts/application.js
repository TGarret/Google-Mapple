// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require gmaps/google
//= require turbolinks
//= require_tree .

function myMap() {
        var myLatLng = new google.maps.LatLng(40.779502, -73.967857);
        var mapProp= {
            center: myLatLng,
            zoom: 1,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            rotateControl: false
            };
        mappy=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
