describe('Current year', function() {
	var AcademicYear = require('./index.js');
  	var schoolAcademicYear = new AcademicYear('2016-09-01');
	console.log('Current academic year: ' + schoolAcademicYear.current());
});	

describe('Next year', function() {
	var AcademicYear = require('./index.js');
  	var schoolAcademicYear = new AcademicYear('2016-09-01');
	console.log('Next academic year: ' + schoolAcademicYear.next());
});	

describe('Name', function() {
	var AcademicYear = require('./index.js');
  	var schoolAcademicYear = new AcademicYear('2016-09-01');
	console.log('Name 1: ' + schoolAcademicYear.abbrName());
	console.log('Name 2: ' + schoolAcademicYear.abbrName('/'));
});	

describe('Full name', function() {
	var AcademicYear = require('./index.js');
  	var schoolAcademicYear = new AcademicYear('2016-09-01');
	console.log('Name 1: ' + schoolAcademicYear.name());
	console.log('Name 2: ' + schoolAcademicYear.name(' - '));	
});	