// Initialize a Line chart in the container with the ID chart1
//$.getJSON("../../data.json", function(json) {
//    console.log(json); // this will show the info it in firebug console
//});

var fillups = {
    "fillups": [
        {
            "date" : "2 February, 2016",
            "name" : "Chevron",
            "address" : "7475 La Jolla Blvd",
            "price" : "40.29",
            "amount" : "12.5",
            "note" : "The gas station was really busy",
            "miles" : "203.8"
        },
        {
            "date" : "3 February, 2016",
            "name" : "Chevron",
            "address" : "7475 La Jolla Blvd",
            "price" : "60.29",
            "amount" : "14.5",
            "note" : "The gas station was really busy",
            "miles" : "240.8"
        },
        {
            "date" : "4 February, 2016",
            "name" : "Chevron",
            "address" : "7475 La Jolla Blvd",
            "price" : "30.29",
            "amount" : "14.5",
            "note" : "The gas station was really busy",
            "miles" : "340.8"
        }
    ]
};


    var dateList = [];
    var priceList = [];
    var mpgList = [];
    for (var i = 0; i < fillups.fillups.length; i++) {
        dateList.push(fillups.fillups[i].date);
        priceList.push(fillups.fillups[i].price / fillups.fillups[i].amount);
        mpgList.push(fillups.fillups[i].miles / fillups.fillups[i].amount);
    }

    console.log(fillups.fillups[0].date);
    new Chartist.Line('#chart1', {
        labels: dateList,
        series: [priceList]
    });

    // Initialize a Line chart in the container with the ID chart2
    new Chartist.Line('#chart2', {
        labels: dateList,
        series: [mpgList]
    });
