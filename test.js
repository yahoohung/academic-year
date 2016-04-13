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
	it('Return #1: 2016-17 and #2: 2016/17', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#1: ' + schoolAcademicYear.getAbbrName());
		console.log('#2: ' + schoolAcademicYear.getAbbrName('/'));
	});
});	

describe('Full name', function() {
	it('Return #3: 2016-2017 and #4: 2016*2017', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#3: ' + schoolAcademicYear.getName());
		console.log('#4: ' + schoolAcademicYear.getName('*'));	
	});
});	

describe('id', function() {
	it('Return #5: 16-17 and #6: 1617', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01');
		console.log('#5: ' + schoolAcademicYear.getId());
		console.log('#6: ' + schoolAcademicYear.getId(''));	
	});
});	

describe('V2 - validate', function() {
	it('Validate date, return #v2 validate 1: false and #v2 validate 2: true', function() {
		var AcademicYear = require('./index.js');
  		var schoolAcademicYear = new AcademicYear('2016-09-01', '2017-06-30');
		console.log('#v2 validate 1: ' + schoolAcademicYear.validate('2017-07-31'));
		console.log('#v2 validate 2: ' + schoolAcademicYear.validate('2016-12-25'));	
	});
});	

describe('V2 - validate fail test', function() {
	var AcademicYear = require('./index.js');
	var schoolAcademicYear = new AcademicYear('2016-09-01');
	var validateResult = schoolAcademicYear.validate('2017-07-31');		
	
	if(!validateResult) it('Passed', function(){});
	else it('Faild', function(){});
});	