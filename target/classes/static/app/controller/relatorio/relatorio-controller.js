app.controller("relatorioController", function($scope,$http) {
	
	
	  // PIE CHART
	  new Morris.Donut({
	    element: 'morris_chart_4',
	    data: [
	      {label: "Vassoura", value: 12},
	      {label: "Sabão em pó", value: 10},
	      {label: "Teste", value: 20},
	      {label: "Disponível", value: 100}
	    ]
	  });
	  
	  var initChartSample1 = function() {
      var chart = AmCharts.makeChart("chart_1", {
          "type": "serial",
          "theme": "light",
          "autoMargins": false,
          "marginLeft": 30,
          "marginRight": 8,
          "marginTop": 10,
          "marginBottom": 26,

          "fontFamily": 'Open Sans',            
          "color":    '#888',
          
          "dataProvider": [{
              "year": 01,
              "income": 23.5,
              "expenses": 18.1
          }, {
              "year": 02,
              "income": 26.2,
              "expenses": 22.8
          }, {
              "year": 03,
              "income": 30.1,
              "expenses": 23.9
          }, {
              "year": 04,
              "income": 29.5,
              "expenses": 25.1
          }, {
              "year": 05,
              "income": 30.6,
              "expenses": 27.2,
              "dashLengthLine": 5
          }, {
              "year": 06,
              "income": 34.1,
              "expenses": 29.9,
              "dashLengthColumn": 5,
              "alpha": 0.2,
              "additional": "(projection)"
          }],
          "valueAxes": [{
              "axisAlpha": 0,
              "position": "left"
          }],
          "startDuration": 1,
          "graphs": [{
              "alphaField": "alpha",
              "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>",
              "dashLengthField": "dashLengthColumn",
              "fillAlphas": 1,
              "title": "Income",
              "type": "column",
              "valueField": "income"
          }, {
              "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>",
              "bullet": "round",
              "dashLengthField": "dashLengthLine",
              "lineThickness": 3,
              "bulletSize": 7,
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "useLineColorForBulletBorder": true,
              "bulletBorderThickness": 3,
              "fillAlphas": 0,
              "lineAlpha": 1,
              "title": "Expenses",
              "valueField": "expenses"
          }],
          "categoryField": "year",
          "categoryAxis": {
              "gridPosition": "start",
              "axisAlpha": 0,
              "tickLength": 0
          }   
      });

      $('#chart_1').closest('.portlet').find('.fullscreen').click(function() {
          chart.invalidateSize();
      });
  }
	
	  
	    initChartSample1();

	
    
});