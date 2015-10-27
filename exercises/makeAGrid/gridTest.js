var gridArray = [];
 
var numberOfRows = 5;
var numberOfColumns = 5;

for (i=0; i<numberOfRows; i++) {
    gridArray.push([]);
    for (x=0; x<numberOfColumns; x++) {
        gridArray[i].push(x);
    }
}

console.log(gridArray);