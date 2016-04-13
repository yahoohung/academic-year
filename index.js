/*!
 * academic-year <https://github.com/yahoohung/academic-year>
 *
 * Copyright (c) 2016, Marshall Chan.
 * Licensed under the MIT License.
 */
'use strict';

var moment = require('moment');

function AcademicYear(firstDate, endDate){
	if (this instanceof AcademicYear) {
		// inital
		this.firstDate = (typeof(firstDate) !== "undefined") ? moment(firstDate) : '';
		this.endDate = (typeof(firstDate) !== "undefined") ? moment(endDate) : '';

		// checker
		this.year = findYear;

		// methods
		this.getId = getId;
		this.getCurrent = getCurrent;
		this.getCurrentAbbr = getCurrentAbbr;
		this.getName = getName;
		this.getAbbrName = getAbbrName;		
		this.getNext = getNext;		
		this.getNextAbbr = getNextAbbr;
		
		// extra fucntions

		this.validate = validate;
		this.getSchoolDays = getSchoolDays;
		
		function getId(d){
			var delimiter = (typeof(d) !== "undefined") ? d : '-';
			return this.getCurrentAbbr() + delimiter + this.getNextAbbr();		
		}				
		
		function findYear(){
			if(firstDate === '') throw new Error("firstDate is required.");
			
			if(endDate !== '' && moment(this.endDate).unix() <= moment(this.firstDate).unix())
				throw new Error("firstDate must be before enddate");
			
			return (moment().dayOfYear() < moment(this.firstDate).dayOfYear()) ? -1 : 0;			
		}

		function getCurrent(){
			return parseInt(moment().add(this.year, 'year').year());
		}
		
		function getCurrentAbbr(){
			return parseInt(moment().add(this.year, 'year').format('YY'));
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
			return parseInt(moment().add(this.year, 'year').year()) + 1;
		}

		function getNextAbbr(){
			return parseInt(moment().add(this.year, 'year').format('YY')) + 1;
		}	

		function validate(date){
			if(endDate === '') throw new Error("endDate is required.");
			// date not correct
			return (moment(date).isValid() 
			   && this.endDate !== '' 
			   && (moment(date).unix() >= moment(this.firstDate).unix() 
				   && moment(date).unix() <= moment(this.endDate).unix()));
		}
		
		function getSchoolDays(oneDayAdded){
			if(endDate === '') throw new Error("endDate is required.");
			
			oneDayAdded = ((typeof(oneDayAdded) !== "boolean")) ? true : oneDayAdded;
			
			return parseInt(this.endDate.diff(this.firstDate, 'days')) + ((oneDayAdded) ? 1 : 0);
		}
	}else{
		return arguments[0] instanceof AcademicYear;
	}		
}

/**
 * Exports AcademicYear.
 */
module.exports = AcademicYear;