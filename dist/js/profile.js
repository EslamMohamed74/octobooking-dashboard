 $(function () {
     $.datepicker.regional["ar"] = { dateFormat: 'yy-mm-dd' }
      $.datepicker.setDefaults($.datepicker.regional["ar"]);
      $("#datepicker").datepicker({
        inline: true
      });
      /* ChartJS
       * -------
       * Here we will create a few charts using ChartJS
       */
      //-------------
      //- BAR CHART -
      //-------------
      var barChartData = {
        labels: ['يناير', 'فيراير', 'مارس', 'ابريل', 'مايو'],
        datasets: [
          {
            label: 'الايرادات',
            backgroundColor: '#02BC77',
            borderColor: '#02BC77',
            pointRadius: true,
            pointColor: '#fff',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: '#fff',
            data: [1000, 600, 200, 1000, 800],
          },
          {
            label: 'الأماكن المتاحة',
            backgroundColor: '#50347E',
            borderColor: '#50347E',
            pointRadius: false,
            pointColor: 'rgba(210, 214, 222, 1)',
            pointStrokeColor: '#c1c7d1',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56]
          },
          {
            label: 'عمليات البيع',
            backgroundColor: '#FF2366',
            borderColor: '#FF2366',
            pointRadius: true,
            pointColor: '#fff',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: '#fff',
            data: [100, 600, 200, 1000, 800],
          },

        ],
      }

      //-------------
      //- BAR CHART -
      //-------------
      var barChartCanvas = $('#barChart').get(0).getContext('2d')
      var barChartData = jQuery.extend(true, {}, barChartData)
      var temp0 = barChartData.datasets[0]
      var temp1 = barChartData.datasets[1]
      var temp2 = barChartData.datasets[2]
      barChartData.datasets[0] = temp0
      barChartData.datasets[1] = temp1
      barChartData.datasets[2] = temp2

      var barChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "rgba(255,255,255,.6)",
              fontFamily: "Tajawal-Regular",
            },

          }],
          yAxes: [{
            position: 'right',

            gridLines: {
              display: true,
            },
            ticks: {
              fontColor: "#FFF",
              fontFamily: "Tajawal-Regular",
            },
            gridLines: {
              color: "rgba(255,255,255,.1)",
              borderDash: [1],
            }
          }]
        },

      }

      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions
      })

      //-------------
      //- BAR CHART -
      //-------------
      var barChartCanvasLight = $('#barChart-light').get(0).getContext('2d')
      var barChartDataLight = jQuery.extend(true, {}, barChartData)
      var temp0 = barChartDataLight.datasets[0]
      var temp1 = barChartDataLight.datasets[1]
      var temp2 = barChartDataLight.datasets[2]
      barChartDataLight.datasets[0] = temp0
      barChartDataLight.datasets[1] = temp1
      barChartDataLight.datasets[2] = temp2

      var barChartOptionsLight = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "rgba(28,28,29,.6)",
              fontFamily: "Tajawal-Regular",
            },

          }],
          yAxes: [{
            position: 'right',

            gridLines: {
              display: true,
            },
            ticks: {
              fontColor: "#1C1C1D",
              fontFamily: "Tajawal-Regular",
            },
            gridLines: {
              color: "rgba(28,28,29,.1)",
              borderDash: [1],
            }
          }]
        },

      }

      var barChartLight = new Chart(barChartCanvasLight, {
        type: 'bar',
        data: barChartDataLight,
        options: barChartOptionsLight
      })
    })
  