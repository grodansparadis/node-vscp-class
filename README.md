# node-vscp-class


![](https://vscp.org/images/logo_100.png)

VSCP class constants for the node.js package **node-vscp-class**

## Install
Install with

```bash
npm install node-vscp-class
```

optionally with '--save' to save dependency in the package.json file.

## Usage

```javascript
const vscp_class = require('node-vscp-class');
...
// Get numeric id for class
console.log(vscp_class.VSCP_CLASS2_MEASUREMENT_STR);

// Get symbolic value for class
// vscp_class(vscpClass);
// output: 'CLASS1.SETVALUEZONEX3'
console.log(vscp_class(88));
```

## Events
Available events are [here](https://docs.vscp.org/spec/latest/#/)

## Using this module with node-red

If you work with [VSCP](https://www.vscp.org) it is convenient to use constants instead of _magical numbers_ when defining/sending event. Info on how to do this is available [here](https://www.npmjs.com/package/node-vscp).

---

This package is part of the [VSCP(Very Simple Control Protocol)](https://www.vscp.org) IoT framework.
