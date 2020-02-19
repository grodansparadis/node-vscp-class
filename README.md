# node-vscp-class


<img src="https://vscp.org/images/logo.png" width="100">

VSCP class constants for the node.js package **node-vscp-class**

## Install
Install with

```bash
npm install node-vscp-class
```

optionally with '--save' to save dependency in the package.json file.

## Usage

```javascript
const vscp_type = require('node-vscp-class');
...
// Get numeric id for class
console.log(vscp_type.VSCP_CLASS2_MEASUREMENT_STR);

// Get symbolic value for class
// vscp_class(vscpClass);
console.log(vscp_class(88));
```

## Events
Available events are [here](https://grodansparadis.gitbooks.io/the-vscp-specification/?id=start/)

---

This package is part of the [VSCP(Very Simple Control Protocol)](https://www.vscp.org) IoT framework.
