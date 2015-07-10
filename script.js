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
        var decimalNumber = arr[i];
        var binaryNumber = ['0', '0', '0', '0', '0', '0', '0', '0'];
        if(decimalNumber >= 128) {
            binaryNumber[0] = 1;
            decimalNumber = decimalNumber - 128;
        }
        if(decimalNumber >= 64) {
            binaryNumber[1] = 1;
            decimalNumber = decimalNumber - 64;
        }
        if(decimalNumber >= 32) {
            binaryNumber[2] = 1;
            decimalNumber = decimalNumber - 32;
        }
        if(decimalNumber >= 16) {
            binaryNumber[3] = 1;
            decimalNumber = decimalNumber - 16;
        }
        if(decimalNumber >= 8) {
            binaryNumber[4] = 1;
            decimalNumber = decimalNumber - 8;
        }
        if(decimalNumber >= 4) {
            binaryNumber[5] = 1;
            decimalNumber = decimalNumber - 4;
        }
        if(decimalNumber >= 2) {
            binaryNumber[6] = 1;
            decimalNumber = decimalNumber - 2;
        }
        if(decimalNumber >= 1) {
            binaryNumber[7] = 1;
        }
        binaryNumber = binaryNumber.join('');
        arr[i] = binaryNumber;
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