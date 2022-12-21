//map function
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (x) {
    return x * 2;
}
);
console.log(arr2);

//filter function
var arr3 = arr.filter(function (x) {
    return x > 3;
}
);
console.log(arr3);

//reduce function
var arr4 = arr.reduce(function (x, y) {
    return x + y;
}
);
console.log(arr4);
