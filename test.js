describe('Current year', function() {
	
    it('Current academic year', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log(schoolAcademicYear.current());
    });	

});	

describe('Next year', function() {
	it('Next academic year', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log(schoolAcademicYear.next());
	});
});	

describe('Name', function() {
	it('Return abbr name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#1: ' + schoolAcademicYear.abbrName());
		console.log('#2: ' + schoolAcademicYear.abbrName('/'));
	});
});	

describe('Full name', function() {
	it('Return full name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#3: ' + schoolAcademicYear.name());
		console.log('#4: ' + schoolAcademicYear.name('*'));	
	});
});	

describe('id', function() {
	it('Return full name', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#5: ' + schoolAcademicYear.id());
		console.log('#6: ' + schoolAcademicYear.id(''));	
	});
});	