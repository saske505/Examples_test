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




var getType = function (val) {
    L.icon = function (options) {
        return new L.Icon(options);
    };
    var typeIcon = L.Icon.extend({
        options: {
            shadowUrl: 'test.png',
            iconSize: [25, 25],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        }
    });
    var greenIcon = new typeIcon({ iconUrl: '../assets/img/green.png' }),
        redIcon = new typeIcon({ iconUrl: '../assets/img/red.png' }),
        orangeIcon = new typeIcon({ iconUrl: '../assets/img/orange.png' });

    this.val = val;
    if (val === "Murder") {
        val = redIcon;
    } else if (val === "Robbery") {
        val = greenIcon;
    } else if (val === "Theft") {
        val = orangeIcon;
    } else if (val === "Assualt") {
        val = redIcon;
    } else if (val === "Vandalism") {
        val = greenIcon;
    } else if (val === "Corruption") {
        val = redIcon;
    }
    return val;
};

var App = (function () {

    var _name = "Map functions";
    var _db = "Locations";
    var _url = "/json/maps.json";
    var items = [];
    

    var setupDb = function () {
       var db = localStorage.getItem('db');
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
            var icon = getType(array[i].type);
            var circle = L.marker([array[i].x, array[i].y], {
                icon: icon
            }).addTo(mymap).bindPopup(array[i].title + "type : " + array[i].type);
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



