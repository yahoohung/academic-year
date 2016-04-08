/*!
 * academic-year <https://github.com/yahoohung/academic-year>
 *
 * Copyright (c) 2016, Marshall Chan.
 * Licensed under the MIT License.
 */
	
'use strict';

var moment = require('moment');

function AcademicYear(firstDay){

    this.year = (moment().dayOfYear() < moment(firstDay).dayOfYear()) ? -1 : 0;
	this.current = current;
	this.next = next;
	this.currentAbbr = currentAbbr;
	this.nextAbbr = nextAbbr;
	
	this.abbrName = abbrName;
	this.name = name;
	
	function current(){
		return moment().add(this.year, 'year').year();
	}

	function next(){
		return parseInt(moment().add(this.year, 'year').year()) + 1;
	}
	
	function currentAbbr(){
		return moment().add(this.year, 'year').format('YY');
	}	
	
	function nextAbbr(){
		return parseInt(moment().add(this.year, 'year').format('YY')) + 1;
	}	
	
	function abbrName(d){
		var delimiter = (typeof(d) != "undefined") ? d : '-';
		return this.current() + delimiter + this.nextAbbr();
	}
	
	function name(d){
		var delimiter = (typeof(d) != "undefined") ? d : '-';
		return this.current() + delimiter + this.next();		
	}
}

/**
 * Exports academicYear.
 */
module.exports = AcademicYear;