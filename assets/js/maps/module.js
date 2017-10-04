//Main application module for  accessing map functions

//example 

var App = (function () {

    var _name = "Map functions";
    var _db = "Locations";
    var _url = "/json/maps.json";

    var _api = function (url) {
        $.getJSON(url, function (data) {
            return data;
        });
    }

    var result = function (val) {
        if (val === "_name") {
            val = _name;
        }
        return val;
    }

    var updateData = function () {
        var data = App._api(url);
        App.result(data);
    }
    
    return {
        result: result,
        updateData : updateData
    }

})();

