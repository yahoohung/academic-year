/*!
 * academic-year <https://github.com/yahoohung/academic-year>
 *
 * Copyright (c) 2016, Marshall Chan.
 * Licensed under the MIT License.
 */
	
'use strict';

var moment = require('moment');

function AcademicYear(firstDate){

    this.year = (moment().dayOfYear() < moment(firstDate).dayOfYear()) ? -1 : 0;
	
	this.getCurrent = getCurrent;
	this.getNext = getNext;
	this.getCurrentAbbr = getCurrentAbbr;
	this.getNextAbbr = getNextAbbr;
	
	this.getAbbrName = getAbbrName;
	this.getName = getName;
	
	this.getId = getId;
	
	function getCurrent(){
		return parseInt(moment().add(this.year, 'year').year());
	}

	function getNext(){
		return parseInt(moment().add(this.year, 'year').year()) + 1;
	}
	
	function getCurrentAbbr(){
		return parseInt(moment().add(this.year, 'year').format('YY'));
	}	
	
	function getNextAbbr(){
		return parseInt(moment().add(this.year, 'year').format('YY')) + 1;
	}	
	
	function getAbbrName(d){
		var delimiter = (typeof(d) != "undefined") ? d : '-';
		return this.getCurrent() + delimiter + this.getNextAbbr();
	}
	
	function getName(d){
		var delimiter = (typeof(d) != "undefined") ? d : '-';
		return this.getCurrent() + delimiter + this.getNext();		
	}
	
	function getId(d){
		var delimiter = (typeof(d) != "undefined") ? d : '-';
		return this.getCurrentAbbr() + delimiter + this.getNextAbbr();		
	}
		
}
	

/**
 * Exports academicYear.
 */
module.exports = AcademicYear;