const { exec } = require('child_process');
var compiler = new (require('markto')),
  fs = require('fs');

compiler.renderFile('./template.m',{log:console.log}).then((res)=>{
  compiler.renderFile('./main.xml',{}).then((res)=>{
    fs.writeFileSync('./output.m', res);
  },console.error);
}, console.error);
