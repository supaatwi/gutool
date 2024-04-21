const gutool = require('./index');


// Example usage
const polygonVertices = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 3 },
    { x: 2, y: 5 },
    { x: 0, y: 3 }
];

console.log(gutool.calculateCentroid(polygonVertices));