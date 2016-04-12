describe('Current year', function() {
	
    it('Current academic year', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log(schoolAcademicYear.getCurrent());
    });	

});	

describe('Next year', function() {
	it('Next academic year', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log(schoolAcademicYear.getNext());
	});
});	

describe('Name', function() {
	it('Return abbr name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#1: ' + schoolAcademicYear.getAbbrName());
		console.log('#2: ' + schoolAcademicYear.getAbbrName('/'));
	});
});	

describe('Full name', function() {
	it('Return full name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#3: ' + schoolAcademicYear.getName());
		console.log('#4: ' + schoolAcademicYear.getName('*'));	
	});
});	

describe('id', function() {
	it('Return full name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#5: ' + schoolAcademicYear.getId());
		console.log('#6: ' + schoolAcademicYear.getId(''));	
	});
});	