// creating request instance (new used for creating instance)
var req = new XMLHttpRequest();
// initiate a connection
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// sending request
req.send();
//load the function (only when data received succesfully)
req.onload = function(){
var data = JSON.parse(this.response);
for(var i in data)
    console.log(data[i].name);

}