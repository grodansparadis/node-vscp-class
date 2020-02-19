const vscp_class = require('./vscp_class.js');

console.log("Class = " + vscp_class.VSCP_CLASS2_MEASUREMENT_STR);
console.log("Class = " + vscp_class.VSCP_CLASS1_PROTOCOL);
console.log(vscp_class.VSCP_CLASS1_MEASUREMENT);
console.log(vscp_class(88));