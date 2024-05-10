$(document).ready(function() {

	// Easy pie chart
	$('.easypie-success').easyPieChart({
		scaleColor: false,
		trackColor: 'rgba(0,0,0,0.035)',
		barColor: '#81c784',
		lineWidth: 8,
		lineCap: 'butt',
		size: 80
	});
	$('.easypie-warning').easyPieChart({
		scaleColor: false,
		trackColor: 'rgba(0,0,0,0.035)',
		barColor: '#f6bb42',
		lineWidth: 8,
		lineCap: 'butt',
		size: 80
	});
	$('.easypie-danger').easyPieChart({
		scaleColor: false,
		trackColor: 'rgba(0,0,0,0.035)',
		barColor: '#ef5350',
		lineWidth: 8,
		lineCap: 'butt',
		size: 80
	});
	$('.easypie-info').easyPieChart({
		scaleColor: false,
		trackColor: 'rgba(0,0,0,0.035)',
		barColor: '#4fc3f7',
		lineWidth: 8,
		lineCap: 'butt',
		size: 80
	});

	// Morris Area Chart
	// Resize functions
	MorrisAreaChart();
	$(window).resize(function() {
		if($('#morris-hero-area').length) {
			window.MorrisAreaChart.redraw();
		}
	});


	// Sparkline Chart
	$(function() {
		var sparkDash01 = function() {
			$('.spark-dash-01').sparkline(
				[1,8,5,7,4,4,1],
				{
					type: 'line',
					width: '100%',
					height: '38',
					lineColor: '#ffffff',
					spotColor: '#ffffff',
					minSpotColor: '#ffffff',
					maxSpotColor: '#ffffff',
					fillColor: 'transparent',
				}
				);
		}
		var sparkDash02 = function() {
			$('.spark-dash-02').sparkline(
				[8,7,5,7,9,10,3],
				{
					type: 'line',
					width: '100%',
					height: '38',
					lineColor: '#ffffff',
					spotColor: '#ffffff',
					minSpotColor: '#ffffff',
					maxSpotColor: '#ffffff',
					fillColor: 'transparent',
				}
				);
		}
		var sparkDash03 = function() {
			$('.spark-dash-03').sparkline(
				[1,9,5,7,9,2,8],
				{
					type: 'line',
					width: '100%',
					height: '38',
					lineColor: '#ffffff',
					spotColor: '#ffffff',
					minSpotColor: '#ffffff',
					maxSpotColor: '#ffffff',
					fillColor: 'transparent',
				}
				);
		}

		// Responsive function for sparkline chart
		var refreshSparkDash01;
		var refreshSparkDash02;
		var refreshSparkDash03;

		$(window).resize(function(e) {
			clearTimeout(refreshSparkDash01);
			clearTimeout(refreshSparkDash02);
			clearTimeout(refreshSparkDash03);

			refreshSparkDash01 = setTimeout(sparkDash01, 500);
			refreshSparkDash02 = setTimeout(sparkDash02, 500);
			refreshSparkDash03 = setTimeout(sparkDash03, 500);
		});

		sparkDash01();
		sparkDash02();
		sparkDash03();
	});

});

// Morris Area Chart
function MorrisAreaChart() {
var date1=document.getElementById("date1").value;
var date2=document.getElementById("date2").value;
var date3=document.getElementById("date3").value;
var date4=document.getElementById("date4").value;
var date5=document.getElementById("date5").value;

var ppc1=document.getElementById("ppc1").value;
if(ppc1=="")
var ppc1=0;
var ppc2=document.getElementById("ppc2").value;
if(ppc2=="")
var ppc2=0;
var ppc3=document.getElementById("ppc3").value;
if(ppc3=="")
var ppc3=0;
var ppc4=document.getElementById("ppc4").value;
if(ppc4=="")
var ppc4=0;
var ppc5=document.getElementById("ppc5").value;
if(ppc5=="")
var ppc5=0;

var clicks1=document.getElementById("clicks1").value;
if(clicks1=="")
var clicks1=0;
var clicks2=document.getElementById("clicks2").value;
if(clicks2=="")
var clicks2=0;
var clicks3=document.getElementById("clicks3").value;
if(clicks3=="")
var clicks3=0;
var clicks4=document.getElementById("clicks4").value;
if(clicks4=="")
var clicks4=0;
var clicks5=document.getElementById("clicks5").value;
if(clicks5=="")
var clicks5=0;

var tv1=document.getElementById("tv1").value;
var tv2=document.getElementById("tv2").value;
var tv3=document.getElementById("tv3").value;
var tv4=document.getElementById("tv4").value;
var tv5=document.getElementById("tv5").value;
if(tv5=="")
var tv5=0;

	if($('#morris-hero-area').length) {

		  window.MorrisAreaChart = Morris.Area({
			element: 'morris-hero-area',
                padding: 10,
                behaveLikeLine: true,
                gridEnabled: false,
                gridLineColor: '#e1e8ed',
                axes: true,
                fillOpacity: .7,
                // grid: false,
                data: [
                    {period: date1,ppc: ppc1,clicks: clicks1,taskvolume: tv1},
                    {period: date2,ppc: ppc2,clicks: clicks2,taskvolume: tv2},
                    {period: date3,ppc: ppc3,clicks: clicks3,taskvolume: tv3},
                    {period: date4,ppc: ppc4,clicks: clicks4,taskvolume: tv4},
                    {period: date5,ppc: ppc5,clicks: clicks5,taskvolume: tv5},
                    ],
                lineColors: ['#0bacf4', '#50b154', '#FF1493'],
                xkey: 'period',
                xLabelFormat: function(period) {
          return period.getDate()+'-'+(period.getMonth()+1)+'-'+period.getFullYear(); 
          },
                ykeys: ['ppc', 'clicks', 'taskvolume'],
                labels: ['RPC', 'CLICKS', 'Task Volume'],
                pointSize: 0,
                lineWidth: 0,
                hideHover: 'auto',
                 dateFormat: function(date) {
          d = new Date(date);
          return d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear(); 
          }
		});
	}
}

// Chart js Doughnut
if($('#chart-donut').length) {
	Chart.defaults.global.responsive = true;
	Chart.defaults.global.maintainAspectRatio = false;
	Chart.defaults.global.responsiveAnimationDuration = 0.5;

        var twallet=document.getElementById("twalletamnt").value;
        var gwallet=document.getElementById("gwallet_amnt").value;
        var surprisecoins=document.getElementById("suprisecoins").value;
        var shoppingpoints=document.getElementById("shoppingpoints").value;


	window.chartColors = {
		primary		: 'rgb(74, 137, 220)',
		success		: 'rgb(129, 199, 132)',
		info		: 'rgb(79, 195, 247)',
		warning		: 'rgb(246, 187, 66)',
		danger		: 'rgb(239, 83, 80)',
		grey		: 'rgb(231,233,237)',
		pink		: 'rgb(255,20,147)'

	};

	var chartJsDashDonut = {
		datasets: [{
		    data: [
		        twallet,
		        gwallet,
		        surprisecoins,
                        shoppingpoints,
		    ],
		    backgroundColor: [
		        window.chartColors.primary,
		        window.chartColors.warning,
		        window.chartColors.danger,
		        window.chartColors.pink,

		    ],
		    label: 'My dataset' // for legend
		}],
		labels: [
		    "Task Wallet",
		    "Grid Walet",
		    "Shopping Points",
		    "Surprise Coins",

		]
	};

	window.onload = function() {
		var ctxDashDonut = document.getElementById("chart-donut").getContext("2d");
		window.myDoughnutChart = new Chart(ctxDashDonut, {
		    type: 'doughnut',
		    data: chartJsDashDonut,
		    animation:{
		        animateScale:true
		    },
		    options: {
		        responsive: true,
		        legend: {
		            position: 'bottom',
		        },
		        title: {
		            display: false,
		        }
		    }
		});
	}
}