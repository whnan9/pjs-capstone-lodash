const _ = {
    clamp(number, lower, upper){
        lowerClampedValue = Math.max(number,lower);
        clampedValue = Math.min(lowerClampedValue,upper)
        return clampedValue;
    },
    inRange(number,start,end){
        if(end === undefined){
            end = start;
            start = 0;
            if (number >= start && number < end){
                return true
            } else {
                return false
            }
        } else if (start > end) {
            temp = start;
            start = end;
            end = temp;
            if (number >= start && number < end){
                return true
            } else {
                return false
            }
        } else {
            if (number >= start && number < end){
                return true
            } else {
                return false
            }
        }
    },
    words(string){
        return string.split(' ')
    },
    pad(string,length){
        if(string.length > length){
            return string
        } else {
            begpadLength = Math.floor(((length - string.length)/2),0);
            endpadLength = length - string.length - begpadLength;
            padString = ' ';
            paddedstring = padString.repeat(begpadLength) + string + padString.repeat(endpadLength);
            return paddedstring
        }
    },
    has(object, key){
        var hasValue = ''
        if (object[key] === 'undefined'){
            hasValue = false
        } else if (object[key]) {
            hasValue = true
        } else {
            hasValue = false
        }
        return hasValue
    },
    invert(object){
        var invertedObject = ''
        for (var key in object){
            var originalValue = object[key]
            invertedObject = {originalValue: key}
        }
        return invertedObject
    },
    findKey(object, predicate){
        for (var key in object){
            var value = object[key];
            predicateReturnValue = predicate(value);
            if (predicateReturnValue){
                return key
            }; 
        };
    },
    drop(array,n){
        if (n === undefined){
            n = 1
        } 
        var droppedArray = array.slice(n)
        return droppedArray
    },
    dropWhile(array, predicate) {
        let droppedArray = [];
        for(let x = 0; x < array.length; x++) {
         
          if(!predicate(array[x], x, array)) {
            droppedArray = array.slice(x);
            //console.log(newArray);
          }
        }  
        return droppedArray;
    },
    chunk (array, size = 1){
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+=size ){
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);  
      }
        return arrayChunks
      }
}




// Do not write or modify code below this line.
module.exports = _;