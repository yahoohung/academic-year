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
		this.firstDate = (typeof(firstDate) != "undefined") ? firstDate  : '';
		this.endDate = (typeof(firstDate) != "undefined") ? endDate : '';

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
		
		function getId(d){
			var delimiter = (typeof(d) != "undefined") ? d : '-';
			return this.getCurrentAbbr() + delimiter + this.getNextAbbr();		
		}		
				
		
		function findYear(){
			if(firstDate === '') throw new Error("firstDate is required.");
			
			return (moment().dayOfYear() < moment(this.firstDate).dayOfYear()) ? -1 : 0;			
		}


		function getCurrent(){
			return parseInt(moment().add(this.year, 'year').year());
		}
		
		function getCurrentAbbr(){
			return parseInt(moment().add(this.year, 'year').format('YY'));
		}			
		
		function getName(d){
			var delimiter = (typeof(d) != "undefined") ? d : '-';
			return this.getCurrent() + delimiter + this.getNext();		
		}
		
		function getAbbrName(d){
			var delimiter = (typeof(d) != "undefined") ? d : '-';
			return this.getCurrent() + delimiter + this.getNextAbbr();
		}

		function getNext(){
			return parseInt(moment().add(this.year, 'year').year()) + 1;
		}

		function getNextAbbr(){
			return parseInt(moment().add(this.year, 'year').format('YY')) + 1;
		}	

		function validate(date){
			// date not correct
			return (moment(date).isValid() 
			   && this.endDate !== '' 
			   && (moment(date).unix() >= moment(this.firstDate).unix() 
				   && moment(date).unix() <= moment(this.endDate).unix()));
		}
	}else{
		return arguments[0] instanceof AcademicYear;
	}
		
}
	

/**
 * Exports academicYear.
 */
module.exports = AcademicYear;