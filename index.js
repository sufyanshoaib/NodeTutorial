var _ = require('underscore');

// how to finds the 3rd party module
// search it in code module
// then suppose its a file or folder
// then search it in node_modules


var result = _.contains([1, 2, 3], 22);

console.log("Result: ", result);