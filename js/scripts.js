$(document).ready(function() {

	$('#slideshow').slippry();
	
	// Create the dropdown base
	$("<select />").appendTo(".mobile_nav");

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "MENU"
	}).appendTo(".mobile_nav select");

	// Populate dropdown with menu items
	$("nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
		 "value"   : el.attr("href"),
		 "text"    : el.text()
	 }).appendTo(".mobile_nav select");
	});

	$(".mobile_nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});


	// Highlight Date

	var $dayofweek = new Date().getDay();

	if($dayofweek == 1) {
		$('#monfri').addClass('datehighlight');
	}
	else if($dayofweek == 2) {
		$('#monfri').addClass('datehighlight');
	}
	else if($dayofweek == 3) {
		$('#monfri').addClass('datehighlight');
	}
	else if($dayofweek == 4) {
		$('#monfri').addClass('datehighlight');
	}
	else if($dayofweek == 5) {
		$('#monfri').addClass('datehighlight');
	}
	else if($dayofweek == 6) {
		$('#saturday').addClass('datehighlight');
	}
	else if($dayofweek == 7) {
		$('#sunday').addClass('datehighlight');
	}


});

function initialize() {

	var myLatlng = new google.maps.LatLng(47.65455, -117.40819,17);
	var mapOptions = {
	    zoom: 15,
	    center: myLatlng
	}

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var contentString = '200 East 2nd Avenue Spokane, WA 99202';

	  var infowindow = new google.maps.InfoWindow({
	      content: contentString
	  });

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Downtown Location 200 East 2nd Avenue Spokane, WA 99202'
	});

	google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  	});

	}

	function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	window.onload = loadScript;