#!/usr/bin/env node

var nunj = require('nunjucks');
var fs = require('fs');
var prettify = require('pretty');

var argv = require('yargs')
	.usage('Usage: $0 [options]')
	.demandOption(['t'])
	.describe('t', 'Template file')
	.alias('t', 'template')
	.describe('d', 'Json data file')
	.alias('d', 'data')
	.argv

var templateFile = argv.template

var data = fs.readFileSync(argv.data, 'utf-8');

var res = nunj.render(templateFile, JSON.parse(data));

console.log(prettify(res, { ocd: true }));

