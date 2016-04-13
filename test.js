var chai= require('chai');
var expect = require('chai').expect;
var assert = chai.assert;
var AcademicYear = require('./index.js');

describe('Constructor', function() {	
	describe('test 1', function() {
		it('should be error', function() {
			var fn = function(){ new AcademicYear() };
			expect(fn).to.throw("firstDate is required.");
		});	
	});		
	
	describe('test 2', function() {
		it('should be error', function() {
			var fn = function(){ new AcademicYear('2015-09-01') };	
			expect(fn).to.throw("endDate is required.");
		});	
	});		

	describe('test 3', function() {
		it('should be error', function() {
			var fn = function(){ new AcademicYear('2015-09-01', '2014-01-01') };	
			expect(fn).to.throw("enddate must be after firstDate.");
		});	
	});		
	
	describe('test 4', function() {
		it('should be error', function() {
			var fn = function(){ new AcademicYear('2015-09-01', '2016-06-30', '2019-01-01') };	
			expect(fn).to.throw("Custom day must be in range");
		});	
	});		
});	

describe('Current year', function() {
	it('Current year should be 2015', function() {
  		var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
		expect(schoolAcademicYear.getCurrent()).to.equal(2015);
	});
	
	it('Current abbr year should be 15', function() {
  		var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
		expect(schoolAcademicYear.getCurrentAbbr()).to.equal(15);
	});	
});	

describe('Next year', function() {
	it('Current year should be 2015', function() {
  		var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
		expect(schoolAcademicYear.getNext()).to.equal(2016);
	});
	
	it('Current abbr year should be 15', function() {
  		var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
		expect(schoolAcademicYear.getNextAbbr()).to.equal(16);
	});	
});	

describe('Abbr Name', function() {
	var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
	it('#1: 2016-17', function() {
		expect(schoolAcademicYear.getAbbrName()).to.equal('2015-16');
	});
	it('#2: 2016/17', function() {
		expect(schoolAcademicYear.getAbbrName('/')).to.equal('2015/16');
	});	
});	

describe('Full name', function() {
	var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');
	it('#3: 2015-2016', function() {
		expect(schoolAcademicYear.getName()).to.equal('2015-2016');	
	});
	it('#4: 2015*2016', function() {
		expect(schoolAcademicYear.getName('*')).to.equal('2015*2016');	
	});	
});	

describe('id', function() {
  	var schoolAcademicYear = new AcademicYear('2015-09-01', '2016-06-30');	
	it('#5: 15-16', function() {
		expect(schoolAcademicYear.getId()).to.equal('15-16');			
	});
	it('#6: 1516', function() {
		expect(schoolAcademicYear.getId('')).to.equal('1516');				
	});	
});	

describe('School days test', function() {
	var schoolAcademicYear = new AcademicYear('2016-09-01', '2017-07-31');
	it('Total school days with first day, ', function() {
		expect(schoolAcademicYear.getSchoolDays()).to.equal(334);			
	});
	it('Total school days without first day, ', function() {
		expect(schoolAcademicYear.getSchoolDays(false)).to.equal(333);				
	});
});	
