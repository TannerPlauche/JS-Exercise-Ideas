var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

function configDate(date) {
	var dateItems = date.split('/');
	var dateValue = (parseInt(dateItems[0]) + 10) + (parseInt(dateItems[1] + 10)) + parseInt(dateItems[2]);
	console.log(dateValue);
	return dateValue;

}


function compareDates(date1, date2) {
	var firstDate = configDate(date1);
	var secondDate = configDate(date2);
	console.log(firstDate + " " + secondDate);
	if ((secondDate - firstDate) > 0) {
		console.log("True.  Dates are acceptable.")
		return true;

	} else {
		console.log("False.  First date cannot come after the second date");
	}
};


compareDates("01/5/1992", "02/5/2013"); //true
compareDates("03/07/2015", "11/06/2013"); // false
compareDates("12/25/2013", "07/02/2013"); //false
compareDates("11/5/2012", "04/11/2013"); //true
compareDates("07/24/2013", "02/12/2013"); //false
compareDates("01/24/2015", "02/12/2014"); //false