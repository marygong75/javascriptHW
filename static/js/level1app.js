var tableData = data;

//tbody
var tbody = d3.select("tbody");

tableData.forEach(function(sightingData) {
    var newRow = tbody.append("tr");
    Object.entries(sightingData).forEach(function([key, value]){
        tbody.append("td").text(value);
    });
});

//input box
var inputBox = d3.select("#datetime");

//handle on submit button
var submit = d3.select("#filter-btn");

//prevent from refreshing after click
submit.on("click", function(){
    d3.event.preventDefault();

//input date for search
var enterDate = inputBox.property("value");
function dateFilter(data) {
    return data.datetime === enterDate
};

//filter list based on input date
var filterList = tableData.filter(dateFilter);
console.log(filterList);
tbody.html("");
filterList.forEach(function(sightingData){
    var newRow = tbody.append("tr");
    Object.entries(sightingData).forEach(function([key,value]){
        tbody.append("td").text(value);
    });
});

});

//clearing the data
function clearDisplay() {
    tbody.html("")
};
