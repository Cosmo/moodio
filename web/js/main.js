$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
	
	$('.color-box').colpick({
		colorScheme:'dark',
		layout:'rgbhex',
		color:'ff8800',
		onSubmit:function(hsb,hex,rgb,el) {
			$(el).css('background-color', '#'+hex);
			$(el).colpickHide();
		}
	});
	
	$('#color-box-1').css('background-color', '#ff8800');
	$('#color-box-2').css('background-color', '#089e30');
	$('#color-box-3').css('background-color', '#183594');
	

	var chart = new CanvasJS.Chart("chartContainer-1",
	{	
		animationEnabled: true,  
		data: [
		{        
			toolTipContent: "{y}",
			type: "splineArea",
			markerSize: 5,
			color: "rgba(255,136,0,.7)",
			dataPoints: [
				{x: 1, y: 0},     
				{x: 2, y: 0},     
				{x: 3, y: 0},     
				{x: 4, y: 0},
				{x: 5, y: 0}, 
				{x: 6, y: 0}, 
				{x: 7, y: 0}, 
				{x: 8, y: 0}, 
				{x: 9, y: 0},     
				{x: 10, y: 0},     
				{x: 11, y: 0},     
				{x: 12, y: 0},
				{x: 13, y: 3}, 
				{x: 14, y: 10}, 
				{x: 15, y: 16}, 
				{x: 16, y: 12},
				{x: 17, y: 20}, 
				{x: 18, y: 23}, 
				{x: 19, y: 10}, 
				{x: 20, y: 0}, 
				{x: 21, y: 0}, 
				{x: 22, y: 0}, 
				{x: 23, y: 0}, 
				{x: 24, y: 20},
				{x: 25, y: 22},
				{x: 26, y: 8},
				{x: 27, y: 12},
				{x: 28, y: 0},
				{x: 29, y: 0}, 			   
			]
		}             
		]
	});
	chart.render();

	
	var chart = new CanvasJS.Chart("chartContainer-2",
	{	
		animationEnabled: true,  
		data: [
		{        
			toolTipContent: "{y}",
			type: "splineArea",
			markerSize: 5,
			color: "rgba(0,255,9,.7)",
			dataPoints: [
				{x: 1, y: 0},     
				{x: 2, y: 0},     
				{x: 3, y: 0},     
				{x: 4, y: 0},
				{x: 5, y: 0}, 
				{x: 6, y: 0}, 
				{x: 7, y: 0}, 
				{x: 8, y: 0}, 
				{x: 9, y: 10},     
				{x: 10, y: 14},     
				{x: 11, y: 12},     
				{x: 12, y: 20},
				{x: 13, y: 26}, 
				{x: 14, y: 0}, 
				{x: 15, y: 0}, 
				{x: 16, y: 0},
				{x: 17, y: 0}, 
				{x: 18, y: 0}, 
				{x: 19, y: 0}, 
				{x: 20, y: 20}, 
				{x: 21, y: 12}, 
				{x: 22, y: 18}, 
				{x: 23, y: 14}, 
				{x: 24, y: 0},
				{x: 25, y: 0},
				{x: 26, y: 0},
				{x: 27, y: 0},
				{x: 28, y: 0},
				{x: 29, y: 0}, 			   
			]
		}             
		]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer-3",
	{	
		animationEnabled: true,  
		data: [
		{        
			toolTipContent: "{y}",
			type: "splineArea",
			markerSize: 5,
			color: "rgba(0,102,255,.7)",
			dataPoints: [
				{x: 1, y: 1},     
				{x: 2, y: 30},     
				{x: 3, y: 40},     
				{x: 4, y: 10},
				{x: 5, y: 10}, 
				{x: 6, y: 10}, 
				{x: 7, y: 10}, 
				{x: 8, y: 10}, 
				{x: 9, y: 0},     
				{x: 10, y: 0},     
				{x: 11, y: 0},     
				{x: 12, y: 0},
				{x: 13, y: 0}, 
				{x: 14, y: 0}, 
				{x: 15, y: 0}, 
				{x: 16, y: 0},
				{x: 17, y: 0}, 
				{x: 18, y: 0}, 
				{x: 19, y: 0}, 
				{x: 20, y: 0}, 
				{x: 21, y: 0}, 
				{x: 22, y: 0}, 
				{x: 23, y: 0}, 
				{x: 24, y: 0},
				{x: 25, y: 0},
				{x: 26, y: 0},
				{x: 27, y: 0},
				{x: 28, y: 20},
				{x: 29, y: 12}, 			   
			]
		}             
		]
	});
	chart.render();	
});