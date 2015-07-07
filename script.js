var converter = angular.module('converter', []);

converter.controller('converterController', function($scope) {

    // ascii chart
    $scope.ascii = {
        '0':'', '1':'', '2':'', '3':'', '4':'', '5':'', '6':'', '7':'', '8':'', '9':'', '10':'', '11':'', 
        '12':'', '13':'', '14':'', '15':'', '16':'', '17':'', '18':'', '19':'', '20':'', '21':'', '22':'',
        '23':'', '24':'', '25':'', '26':'', '27':'', '28':'', '29':'', '30':'', '31':'',
        '32': 'Space',
        '33': '!',
        '34': '"',
        '35': '#',
        '36': '$',
        '37': '%',
        '38': '&',
        '39': "'",
        '40': '(',
        '41': ')',
        '42': '*',
        '43': '+',
        '44': ',',
        '45': '-',
        '46': '.',
        '47': '/',
        '48': '0',
        '49': '1',
        '50': '2',
        '51': '3',
        '52': '4',
        '53': '5',
        '54': '6',
        '55': '7',
        '56': '8',
        '57': '9',
        '58': ':',
        '59': ';',
        '60': '<',
        '61': '=',
        '62': '>',
        '63': '?',
        '64': '@',
        '65': 'A',
        '66': 'B',
        '67': 'C',
        '68': 'D',
        '69': 'E',
        '70': 'F',
        '71': 'G',
        '72': 'H',
        '73': 'I',
        '74': 'J',
        '75': 'K',
        '76': 'L',
        '77': 'M',
        '78': 'N',
        '79': 'O',
        '80': 'P',
        '81': 'Q',
        '82': 'R',
        '83': 'S',
        '84': 'T',
        '85': 'U',
        '86': 'V',
        '87': 'W',
        '88': 'X',
        '89': 'Y',
        '90': 'Z',
        '91': '[',
        '92': "'\'",
        '93': ']',
        '94': '^',
        '95': '_',
        '96': 'rr',
        '97': 'a',
        '98': 'b',
        '99': 'c',
        '100': 'd', 
        '101': 'e',
        '102': 'f',
        '103': 'g',
        '104': 'h',
        '105': 'i',
        '106': 'j',
        '107': 'k',
        '108': 'l',
        '109': 'm',
        '110': 'n',
        '111': 'o',
        '112': 'p',
        '113': 'q',
        '114': 'r',
        '115': 's',
        '116': 't',
        '117': 'u',
        '118': 'v',
        '119': 'w',
        '120': 'x',
        '121': 'y',
        '122': 'z',
        '123': '{',
        '124': '|',
        '125': '}',
        '126': '~',
        '127': 'DEL'
    };

    $scope.letters;
    $scope.binary;

    // convert single binary value
    $scope.decypherBinarySingle = function(bin) {
        var result = 0;

        if(bin.charAt(bin.length - 1) == 1) {
            result = result + 1;
        }
        if(bin.charAt(bin.length - 2) == 1) {
            result = result + 2;
        }
        if(bin.charAt(bin.length - 3) == 1) {
            result = result + 4;
        }
        if(bin.charAt(bin.length - 4) == 1) {
            result = result + 8;
        }
        if(bin.charAt(bin.length - 5) == 1) {
            result = result + 16;
        }
        if(bin.charAt(bin.length - 6) == 1) {
            result = result + 32;
        }
        if(bin.charAt(bin.length - 7) == 1) {
            result = result + 64;
        }
        if(bin.charAt(bin.length - 8) == 1) {
            result = result + 128;
        }
        return result;
    };

    $scope.findLetterByKey = function(key) {
       return $scope.ascii[key];
    }

    // take all values from binary textarea and get single conversions
    $scope.decypherBinaryMultiple = function() {
        bin = $scope.binary;
        bin = bin.split(/[ ,]+/);

        var stepResult;
        var letterResult;
        var textResult = [];

        for(var i = 0; i < bin.length; i++) {
            stepResult = $scope.decypherBinarySingle(bin[i]);
            console.log(stepResult);
            letterResult = $scope.findLetterByKey(stepResult);
            textResult.push(letterResult);
        }

        $scope.letters = textResult;
    };

    // convert from decimal to binary
    $scope.convertToBinary = function(num) {
        var result = ['0', '0', '0', '0', '0', '0', '0', '0'];
        if(num >= 128) {
            num = num - 128;
            result[0] = 1;
        }
        if(num >= 64) {
            num = num - 64;
            result[1] = 1;
        }
        if(num >= 32) {
            num = num - 32;
            result[2] = 1;
        }
        if(num >= 16) {
            num = num - 16;
            result[3] = 1;
        }
        if(num >= 8) {
            num = num - 8;
            result[4] = 1;
        }
        if(num >= 4) {
            num = num - 4;
            result[5] = 1;
        }
        if(num >= 2) {
            num = num - 2;
            result[6] = 1;
        }
        if(num == 1) {
            result[7] = 1;
        }

        console.log(result);
        return result;
    }

    // convert letter to decimal key 
    $scope.decypherTextSingle = function(letter) {
        var asciiKeys = (Object.keys($scope.ascii));
        for(var i = 0; i < Object.keys($scope.ascii).length; i++) {
            if($scope.ascii[i] == letter) {
                var result = $scope.convertToBinary(asciiKeys[i]);
                return result;
            }
        }
    };

    // find letters in text
    $scope.decypherTextMultiple = function(text) {
        text = $scope.letters;
        text = text.split(/[ ,]+/);

        var stepBinResult;
        var finalBinResult = [];
        $scope.binary = finalBinResult;

        for(var i = 0; i < text.length; i++) {
            for(var j = 0; j < text[i].length; j++) {
                stepBinResult = $scope.decypherTextSingle(text[i][j]);
                stepBinResult = stepBinResult.join("");
                finalBinResult.push(stepBinResult);
            }
        }
    };


});