#!/usr/bin/env node
const { exec } = require('child_process');
var compiler = new (require('markto')),
  fs = require('fs'),
  twig = require('twig');

compiler.renderFile('./template.m').then((res)=>{
  compiler.renderFile('./test.xml').then((res)=>{
    fs.writeFileSync('./output.m', res);
  },console.error);
}, console.error);
