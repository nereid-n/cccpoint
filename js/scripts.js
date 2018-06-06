window.onload = function () {
		if ( typeof($('#crypMap')) != 'undefined' ) {
			$('#crypMap').ready(function(e) {
				
				var locations = [
							['Praha - Nové město', 50.080083,14.4098187 , 
							'<div class="map-point">' + 
								'<div class="map-point-desc leftText shadow rounded">' + 
									'<h2 class="smallTitle">CCC Point</h2>' +
									'<h3>Praha - Nové město</h3>' + 
									'<a href="/pobocka-praha" title="Praha" class="btn outline small rounded">Více</a>' + 
								'</div>' + 
							'</div>' ],
							['Brno', 49.2021611,16.5079211 , 
							'<div class="map-point">' + 
								'<div class="map-point-desc leftText shadow rounded">' + 
									'<h2 class="smallTitle">CCC Point</h2>' + 
									'<h3>Brno</h3>' + 
									'<a href="/pobocka-brno" title="Brno" class="btn outline small rounded">Více</a>'+ 
								'</div>'+ 
							'</div>' ],
				];
				
				var styles = [
					{
						"featureType": "all",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"saturation": 36
							},
							{
								"color": "#333333"
							},
							{
								"lightness": 40
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#ffffff"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"lightness": 17
							},
							{
								"weight": 1.2
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#1b161d"
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#0dcfff"
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "administrative.neighborhood",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"gamma": "0"
							},
							{
								"weight": "2.97"
							}
						]
					},
					{
						"featureType": "administrative.land_parcel",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"lightness": "17"
							},
							{
								"gamma": "0"
							},
							{
								"weight": "0.01"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f5f5f5"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f5f5f5"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"weight": "4.81"
							}
						]
					},
					{
						"featureType": "landscape.natural.terrain",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#ff0000"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f5f5f5"
							},
							{
								"lightness": 21
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#d6ecb7"
							},
							{
								"lightness": 21
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#dbdbdb"
							},
							{
								"lightness": "0"
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#b8b8b8"
							},
							{
								"lightness": "0"
							},
							{
								"weight": "1"
							},
							{
								"visibility": "on"
							},
							{
								"gamma": "1"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#ffffff"
							},
							{
								"lightness": 18
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#dbdbdb"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#b8b8b8"
							},
							{
								"weight": "1"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#ffffff"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#dbdbdb"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f2f2f2"
							},
							{
								"lightness": 19
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#e9e9e9"
							},
							{
								"lightness": 17
							}
						]
					}
				];
				
				var div = document.getElementById('crypMap'); 
			
				if ( div !== null ) { 
					var options = { mapTypeControlOptions: { mapTypeIds: ['CCC Point'] },
					center: new google.maps.LatLng(49.694609, 15.067432), zoom: 9, disableDefaultUI: false, mapTypeId: 'CCC Point', scrollwheel: false, };
					
					var map = new google.maps.Map(div, options); 
					var styledMapType = new google.maps.StyledMapType(styles, { name: 'CCC Point' });
					
					map.mapTypes.set('CCC Point', styledMapType);
					
					for(var i = 0; i < locations.length; i++){
						marker = new RichMarker({
							position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							map: map,
							content: locations[i][3],
							shadow: 0
						});
					}
				
				}			
			});
		}
	}