//Main application module for  accessing map functions

//example 

var mymap;
$(document).ready(function () {
    mymap = L.map('mapid').setView([-25.753180, 28.244319], 6);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2Fza2U1MDUiLCJhIjoiY2o4ZGF6ZDVrMGlxazJ3bW51anp3ODBwYSJ9.kFyUBehneH9dK1uAXcCkmw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    setTimeout(function () {
        App.updateData();
    }, 1000);


});

var App = (function () {

    var _name = "Map functions";
    var _db = "Locations";
    var _url = "/json/maps.json";
    var items = [];
    var db = localStorage.getItem('db');

    var setupDb = function (db) {
        
        if (db === null) {
            _api();            
            localStorage.setItem('db', JSON.stringify(items));
        } else if (db === "[]") {
            _api(); 
            localStorage.setItem('db', JSON.stringify(items));
           
        } else {
            console.log("Local database already exist.");
        }
    }

    var getDb = function (val) {
        this.val = db;
        return JSON.parse(val);
    }

    var _api = function () {
        var url = _url;
        items.length = 0;
        $.getJSON(url, {
            format: "json"
        }).done(function (data) {          

            $.each(data, function (key, val) {
                items.push(val);
            });
           
            });
        return items;        
    }

    var result = function (val) {
        if (val === "_name") {
            val = _name;
        }
        return val;
    }

    var updateData = function () {
        _api();
        console.log(items);
    }

    var makeMap = function () {
        
        var array = App.items;
        for (var i = 0; i < array.length; i++) {
            var circle = L.circle([array[i].x, array[i].y], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            }).addTo(mymap).bindPopup(array[i].title);
        }

    }
    
    return {
        result: result,
        updateData: updateData,
        items: items,
        makeMap: makeMap,
        setupDb: setupDb,
        getDb : getDb
    }

})();



