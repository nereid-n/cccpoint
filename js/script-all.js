function isIE()
{
	return /*@cc_on!@*/false || !!document.documentMode;
}

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

$(document).ready(function() {

	$(document).on('click', '.crypto-header__mobile-btn', function () {
	  $(this).toggleClass('crypto-header__mobile-btn-cross');
	  $(this).siblings('.crypto-header__mobile-menu').slideToggle('fast');
	});

    $('.owl-carousel').owlCarousel({
					nav: true,
					dots: false,
					autoplay: true,
					autoplayTimeout: 3000,
					autoplayHoverPause: true,
					autoplaySpeed: 2000,
					loop: true,
					responsive: {
						0: {
							items: 1,
						},
						767: {
							items: 2,
						},
						959: {
							items: 3,
						},
					} 
				});
	
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





});
