'use strict'
const path = require('path');
const config = {
  "srcDir": path.join(__dirname, '..', 'webapp'),
  "buildDir": path.join(__dirname, '..', 'build'),
  "logDir": path.join(__dirname, '..', 'log'),
};

const local = {

};

//本地调试环境
// if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
//     config = _.extend(config, local);
// }

module.exports = config;
