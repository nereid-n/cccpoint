function isIE()
{
	return /*@cc_on!@*/false || !!document.documentMode;
}

$(document).ready(function() {
	
    // Elements to inject
	var mySVGsToInject = document.querySelectorAll('img.inject-me');

	// Options
	var injectorOptions = {
		  evalScripts: 'once',
		  pngFallback: 'assets/png',
		  each: function (svg) {}
	}
	SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  	// Callback after all SVGs are injected
		if ( $(window).width() > 959)
		{
			var topSideHeight = $('.headerCover').outerHeight( true );
			$('#main section').first().css({"padding-top":topSideHeight});
		}
	});
	
	if (!Modernizr.svg) { 
		
		$('img[src$=".inject-me"]').each(function()
		{
			$(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
		});
	};
	
	// Graphs

	if ( typeof($('#currencyGraphs')) != 'undefined' )
	{
		AmCharts.makeChart('chartdiv',
			{
				"type": "serial",
				"categoryField": "date",
				"autoMarginOffset": 40,
				"marginRight": 60,
				"marginTop": 60,
				"fontFamily": "Nunito Sans",
				"fontSize": 10,
				"theme": "light",
				"categoryAxis": {
					"parseDates": true
				},
				"chartCursor": {
					"enabled": true
				},
				"chartScrollbar": {
					"enabled": true,
					"graph": "g1",
					"graphType": "line",
					"scrollbarHeight": 30
				},
				"trendLines": [],
				"graphs": [
					{
						"balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
						"closeField": "close",
						"columnWidth": 0,
						"fillAlphas": 0.9,
						"fillColors": "#41D57D",
						"fixedColumnWidth": 5,
						"fontSize": 4,
						"highField": "high",
						"id": "g1",
						"lineColor": "#41D57D",
						"lowField": "low",
						"negativeFillAlphas": 0,
						"negativeFillColors": "#E2001A",
						"negativeLineAlpha": 0,
						"negativeLineColor": "#E2001A",
						"openField": "open",
						"title": "Price:",
						"type": "candlestick",
						"valueField": "close"
					}
				],
				"guides": [
					{
						"angle": 0,
						"fillAlpha": 0,
						"id": "Guide-1",
						"toAngle": 0
					},
					{
						"id": "Guide-2"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1"
					}
				],
				"allLabels": [],
				"balloon": {},
				"titles": [],
				"dataProvider": [
					{
						"date": "2018-06-01",
						"open": "136.65",
						"high": "136.96",
						"low": "134.15",
						"close": "136.49"
					},
					{
						"date": "2018-06-02",
						"open": "135.26",
						"high": "135.95",
						"low": "131.50",
						"close": "131.85"
					},
					{
						"date": "2018-06-03",
						"open": "132.90",
						"high": "135.27",
						"low": "128.30",
						"close": "135.25"
					},
					{
						"date": "2018-06-04",
						"open": "134.94",
						"high": "137.24",
						"low": "132.63",
						"close": "135.03"
					},
					{
						"date": "2018-06-05",
						"open": "136.76",
						"high": "136.86",
						"low": "132.00",
						"close": "134.01"
					},
					{
						"date": "2018-06-06",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-07",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-08",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-09",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-10",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-11",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					},
					{
						"date": "2018-06-12",
						"open": null,
						"high": null,
						"low": null,
						"close": null
					}
				]
			}
		);
	}
	
	// Google map
	window.onload = function () {
		if ( typeof($('#mapDiv')) != 'undefined' )
		{
			$('#mapDiv').ready(function(e) {
				
				var locations = [
							['Praha - Nové město', 50.080083,14.4098187 , '<div class="map-point"><div class="map-point-desc leftText shadow rounded"><h2 class="smallTitle">CCC Point</h2><h3>Praha - Nové město</h3><a href="/pobocka-praha" title="Praha" class="btn outline small rounded">Více</a></div></div>' ],
							['Brno', 49.2021611,16.5079211 , '<div class="map-point"><div class="map-point-desc leftText shadow rounded"><h2 class="smallTitle">CCC Point</h2><h3>Brno</h3><a href="/pobocka-brno" title="Brno" class="btn outline small rounded">Více</a></div></div>' ],
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
				
				var div = document.getElementById('mapDiv'); 
			
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
	
	$('.toggle').click(function(){
		$(this).toggleClass('close');
		$('.menuCover').toggleClass('open');
	});
	
	$(window).on("resize load",function(e){
		
		var windowHeight = $(window).outerHeight( true );
		var topSideHeight = $(".headerCover").outerHeight( true );
		var footSideHeight = $(".footerCover").outerHeight( true );
		var newPageHeight = windowHeight - topSideHeight - footSideHeight;
		var servicesContent = $("#quickServices").outerHeight( true );
		$('#main').css({"min-height" : newPageHeight } );
		
		if ( $(window).width() > 960 )
		{
			$('.menuCover').removeClass('open');
			$('.toggle').removeClass('close');
			
			//$('.account').hover(function(){
//				if ($(this).hasClass('signed'))
//				{
//					$('.signedDiv').toggleClass('show');
//				}
//				else
//				{
//					$('.signInDiv').toggleClass('show');
//				}
//			});
			
				$('#main section').first().css({"padding-top":topSideHeight});

			
			$('.submenuContent2').each(function() {
		
				var offsetLeft = $(this).offset().left;
				var windowWidth = $(window).outerWidth();	 
				
				var resultNumber = windowWidth - offsetLeft;
					
				if ( resultNumber < 165 )
					{
						$(this).css({ "left":"auto", "right":"100%"});
					}
				
			
			});		
						
			$('.submenuContent').each(function() {
				
				var offsetLeft = $(this).offset().left;
				var windowWidth = $(window).outerWidth();	 
				
				var resultNumber = windowWidth - offsetLeft
					
				if ( resultNumber < 165 )
					{
						$(this).css({ "left":"auto", "right":"0"});
					}
				
			
			});
		}
		else
		{
			$('#main section').first().css({"padding-top": topSideHeight });
			
			$(this).on('load scroll', function(){
				if ($(this).scrollTop() > $('#main section').first().outerHeight(true))
				{
					$('.toggle').css({'background':'#1B161D'});
				}
				else
				{
					$('.toggle').css({'background':'none'});
				}
			});
		};
	});



});
