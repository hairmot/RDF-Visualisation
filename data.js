var output = [];

var childrenArray = [{name: '1'},{name: '2'},{name: '3'}];

var bigArray = [{name: '1', children:childrenArray},{name: '2',children:childrenArray},{name: '3',children:childrenArray}];
for (var i = 0; i < 4; i++) {
    var dynObj = {
        name: String.fromCharCode(97 + i),
        children : bigArray
    }
    output[i] = dynObj;
}

console.log(JSON.stringify(output));