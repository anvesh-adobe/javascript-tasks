//Count duplicate values in an array

var uniqueCount = [1,1,1,2,3,4,5,6,5,6,5,5,5,5,5,7,6,6,6,6,8,7,7,7,7];
var count = {};
uniqueCount.forEach(function(val){count[val] = (count[val] || 0) +1;}); //{1: 3, 2: 1, 3: 1, 4: 1, 5: 7, 6: 6, 7: 5, 8: 1}

//Binary Search Algorithm

function seachInt(array, int){

    var start  = 0;
    var stop   = array.length - 1;
    var midOne = Math.floor((stop + start)/2);

    while(array[midOne] != int && start < stop){
        if (int < array[midOne]){
            stop = midOne - 1;
        } else if (int > array[midOne]){
            start = midOne + 1;
        }
        midOne = Math.floor((stop + start)/2);
    }
    
    return (array[midOne] != int) ? -1 : midOne;
}

var values = [1,2,3,4,5,6,7,8,9,10,11,20,30,40,60,100,300];
console.log(seachInt(values, 2)); // 1

