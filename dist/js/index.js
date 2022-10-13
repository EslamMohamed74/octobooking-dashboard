$(function () {
  $.datepicker.regional["ar"] = {
    dateFormat: 'yy-mm-dd'
  }
  $.datepicker.setDefaults($.datepicker.regional["ar"]);
  $("#dateInput1").datepicker();
  $("#dateInput2").datepicker();

  $("#open_dateInput1").click(function () {
    $("#dateInput1").datepicker("show");
  });
  $("#open_dateInput2").click(function () {
    $("#dateInput2").datepicker("show");
  });

  $('#index-table').DataTable({
    "paging": false,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": false,
    "autoWidth": false,
    "aoColumnDefs": [{
      "bSortable": false,
      "aTargets": [8]
    }, ]
  });
  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //--------------
  //- AREA CHART -
  //--------------

  // Get context with jQuery - using jQuery's .get() method.
  var areaChartCanvas = $('#areaChart').get(0).getContext('2d')

  var areaChartData = {
    labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو'],
    datasets: [{
      label: 'عمليات البيع',
      backgroundColor: 'rgba(81, 52, 127, 0.27)',
      borderColor: 'rgba(94, 55, 179, 1)',
      pointRadius: true,
      pointColor: '#fff',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#fff',
      data: [28, 48, 40, 19, 27, 50],
    }]
  }

  var areaChartOptions = {
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
          borderDash: [5, 5],
        }
      }]
    },

  }

  // This will get the first returned node in the jQuery collection.
  var areaChart = new Chart(areaChartCanvas, {
    type: 'line',
    data: areaChartData,
    options: areaChartOptions
  })


    //--------------
  //- AREA CHART -
  //--------------

  // Get context with jQuery - using jQuery's .get() method.
  var areaChartCanvasLight = $('#areaChart-light').get(0).getContext('2d')

  var areaChartDataLight = {
    labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو'],
    datasets: [{
      label: 'عمليات البيع',
      backgroundColor: 'rgba(81, 52, 127, 0.27)',
      borderColor: 'rgba(94, 55, 179, 1)',
      pointRadius: true,
      pointColor: '#fff',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#fff',
      data: [28, 48, 40, 19, 27, 50],
    }]
  }

  var areaChartOptionsLight = {
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
          fontColor: "rgba(28,28,29,0.6)",
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
          color: "rgba(28,28,29,0.1)",
          borderDash: [5, 5],
        }
      }]
    },

  }

  // This will get the first returned node in the jQuery collection.
  var areaChartLight = new Chart(areaChartCanvasLight, {
    type: 'line',
    data: areaChartDataLight,
    options: areaChartOptionsLight
  })


  //-------------
  //- DONUT CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
  var donutData = {
    labels: [
      'عمليات البيع',
      'الاماكن و الخدمات',
      'الشكاوي و المقترحات',
    ],
    legend: {
      display: false
    },
    datasets: [{
      data: [680, 200, 120],
      backgroundColor: ['#02BC77', '#4791FF', '#D12156'],
      borderColor: "transparent",
    }]
  }
  var donutOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
  }
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  var donutChart = new Chart(donutChartCanvas, {
    type: 'doughnut',
    data: donutData,
    options: donutOptions
  })
})