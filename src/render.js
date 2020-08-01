/*
 * Sample usage:
 * 
 * $ node render.js ./form-field/field.njk ./sample-input/form-field/without-hint.json
 *
 */

var nunj = require('nunjucks');
var fs = require('fs');
var prettify = require('pretty');

var templateFile = process.argv[2]

var data = fs.readFileSync(process.argv[3], 'utf-8');

var res = nunj.render(templateFile, JSON.parse(data));

console.log(prettify(res, { ocd: true }));

