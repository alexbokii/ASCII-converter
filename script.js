var converter = angular.module('converter', []);

converter.controller('converterController', function($scope) {

    $scope.letters;
    $scope.binary;

    $scope.convertBinary = function() {
        var binaryResult = convertBinaryToDecimal($scope.binary);
        var textResultArray = convertTextFromDecimal(binaryResult);
        $scope.letters = textResultArray.join('');
    };

    $scope.convertText = function() {
        var text = [];
        for(var i = 0; i < $scope.letters.length; i++) {
            var a = $scope.letters.charCodeAt(i);
            text.push(a);
        }
       
        text = convertDecimalToBinary(text);
        $scope.binary = text;
    };

});

function convertDecimalToBinary(arr) {
    for(var i = 0; i < arr.length; i++) {
        var decNum = arr[i];
        var binNum = [];

        while(decNum > 0) {
            if(decNum % 2 == 0) {
                binNum.unshift('0');
                decNum = decNum / 2;
            }
            else if(decNum % 2 == 1) {
                binNum.unshift('1');
                decNum = (decNum - 1) / 2;
            }
        }

        arr[i] = binNum.join('');
    }
    return arr;
}

function convertBinaryToDecimal(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log();
        arr[i] = parseInt(arr[i], 2);
    }
    return arr;
}

function convertTextFromDecimal(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = String.fromCharCode(arr[i]);
    }
    return arr;
}