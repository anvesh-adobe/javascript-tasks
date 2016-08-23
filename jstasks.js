//Count duplicate values in an array

var uniqueCount = [1,1,1,2,3,4,5,6,5,6,5,5,5,5,5,7,6,6,6,6,8,7,7,7,7];
var count = {};
uniqueCount.forEach(function(val){count[val] = (count[val] || 0) +1;}); //{1: 3, 2: 1, 3: 1, 4: 1, 5: 7, 6: 6, 7: 5, 8: 1}

