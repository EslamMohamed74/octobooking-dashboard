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
        labels: ['الاحد', 'الاثنين', 'الثلاثاء', 'اللاربعاء', 'الخميس', 'الجمعة'],
        datasets: [{
            label: 'عمليات البيع',
            backgroundColor: 'rgba(81, 52, 127, 0.27)',
            borderColor: 'rgba(94, 55, 179, 1)',
            pointRadius: true,
            pointColor: '#fff',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: '#fff',
            data: [0, 600, 200, 1000, 800, 400],
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
                    display: true,
                },
                ticks: {
                    fontColor: "rgba(255,255,255,.6)",
                    fontFamily: "Tajawal-Regular",
                },
                gridLines: {
                    color: "rgba(255,255,255,.1)",
                    borderDash: [5, 5],
                }

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
        labels: ['الاحد', 'الاثنين', 'الثلاثاء', 'اللاربعاء', 'الخميس', 'الجمعة'],
        datasets: [{
            label: 'عمليات البيع',
            backgroundColor: 'rgba(81, 52, 127, 0.27)',
            borderColor: 'rgba(94, 55, 179, 1)',
            pointRadius: true,
            pointColor: '#fff',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: '#fff',
            data: [0, 600, 200, 1000, 800, 400],
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
                    display: true,
                },
                ticks: {
                    fontColor: "rgba(28,28,29,0.6)",
                    fontFamily: "Tajawal-Regular",
                },
                gridLines: {
                    color: "rgba(28,28,29,0.1)",
                    borderDash: [5, 5],
                }

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
            'التقيمات',
            'الاماكن و الخدمات الغير متاحة',
            'اجمالى المبيعات',
            'الاماكن و الخدمات المتاحة',
        ],
        legend: {
            display: false
        },
        datasets: [{
            data: [600, 50, 200, 150],
            backgroundColor: ['#ED8E05', '#D12156', '#50337E', '#4791FF'],
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


    var barChartData = {
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو'],
        datasets: [{
                label: 'الأماكن المتاحة',
                backgroundColor: '#4791FF',
                borderColor: '#4791FF',
                pointRadius: true,
                pointColor: '#fff',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#fff',
                data: [100, 600, 200, 1000, 800],
            },
            {
                label: 'الأماكن الغير المتاحة',
                backgroundColor: '#FF2366',
                borderColor: '#FF2366',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56]
            },
            {
                label: 'الاماكن المعروضة',
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
                label: 'التقيمات',
                backgroundColor: '#FFD950',
                borderColor: '#FFD950',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56]
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
    var temp3 = barChartData.datasets[3]
    barChartData.datasets[0] = temp0
    barChartData.datasets[1] = temp1
    barChartData.datasets[2] = temp2
    barChartData.datasets[3] = temp3

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
    var temp3 = barChartDataLight.datasets[3]
    barChartDataLight.datasets[0] = temp0
    barChartDataLight.datasets[1] = temp1
    barChartDataLight.datasets[2] = temp2
    barChartDataLight.datasets[3] = temp3

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