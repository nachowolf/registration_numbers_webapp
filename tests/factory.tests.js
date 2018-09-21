const assert = require('assert');
const regnum = require('../src/regnum.js');
const factory = regnum();

describe('confirms that regnum is being called into tests', function () {
    console.log(factory.connected());

});
