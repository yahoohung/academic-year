/*!
 * academic-year <https://github.com/yahoohung/academic-year>
 *
 * Copyright (c) 2016, Marshall Chan.
 * Licensed under the MIT License.
 */
'use strict';

var moment = require('moment');

function AcademicYear(firstDate, endDate, today){
	
	if (!(this instanceof AcademicYear)) {
		throw new Error("AcademicYear needs to be called with the new object");
	}
	
	if((typeof(firstDate) === "undefined")) throw new Error('firstDate is required.');
	else if((typeof(endDate) === "undefined")) throw new Error("endDate is required.");
	else if(moment(endDate).unix() < moment(firstDate).unix()) throw new Error("enddate must be after firstDate.");
	else if((typeof(today) !== "undefined") && (moment(today).unix() < moment(this.firstDate).unix() || moment(today).unix() > moment(this.endDate).unix())) 
		throw new Error("Custom day must be in range");	
	
	this.firstDate = moment(firstDate);
	this.endDate = moment(endDate);

	// methods
	this.getId = getId;
	this.getCurrent = getCurrent;
	this.getCurrentAbbr = getCurrentAbbr;
	this.getName = getName;
	this.getAbbrName = getAbbrName;		
	this.getNext = getNext;		
	this.getNextAbbr = getNextAbbr;

	// extra fucntions
	this.getSchoolDays = getSchoolDays;

	function getId(d){
		var delimiter = (typeof(d) !== "undefined") ? d : '-';
		return this.getCurrentAbbr() + delimiter + this.getNextAbbr();		
	}				


	function getCurrent(){
		return parseInt(moment(this.firstDate).year());
	}

	function getCurrentAbbr(){
		return parseInt(moment(this.firstDate).format('YY'));
	}			

	function getName(d){
		var delimiter = (typeof(d) !== "undefined") ? d : '-';
		return this.getCurrent() + delimiter + this.getNext();		
	}

	function getAbbrName(d){
		var delimiter = (typeof(d) !== "undefined") ? d : '-';
		return this.getCurrent() + delimiter + this.getNextAbbr();
	}

	function getNext(){
		return parseInt(moment(this.endDate).year());
	}

	function getNextAbbr(){
		return parseInt(moment(this.endDate).format('YY'));
	}	

	function getSchoolDays(oneDayAdded){
		if(endDate === '') throw new Error("endDate is required.");

		oneDayAdded = ((typeof(oneDayAdded) !== "boolean")) ? true : oneDayAdded;

		return parseInt(this.endDate.diff(this.firstDate, 'days')) + ((oneDayAdded) ? 1 : 0);
	}	
}

/**
 * Exports AcademicYear.
 */
module.exports = AcademicYear;