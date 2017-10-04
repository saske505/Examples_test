//Main application module for  accessing map functions

//example 

var App = (function () {

    var _name = "Map functions";


    var result = function (val) {
        if (val === "_name") {
            val = _name;
        }
        return val;
    }

    return {
        result : result
    }

})();

