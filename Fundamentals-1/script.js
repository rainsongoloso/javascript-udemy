// let js = "This is JavaScript";

// let firstName = "Rainson";
// let lastName = "Goloso";
// let birthDay = 24;
// let birthMonth = 9;
// let birthYear = 1997;

// let dateToday = new Date();
// let yearToday = dateToday.getFullYear();
// let dateNow = dateToday.getMonth();
// let monthToday = dateToday.getDate();

// let myAge;

// if(birthDay == dateToday.getDate() && birthMonth == dateToday.getMonth()){
// 	alert("Happy Birthday!");
// 	myAge = yearToday - birthYear;
// 	console.log(myAge);
// };


// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// console.log(x);

// // Comparison operators
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);

// // const isFullAge = ageSarah >= 18;

// let x1, y;
// x1 = y = 25 - 10 - 5;
// x1 = y = 25;
// console.log(x1, y);

// Switch Statement

const day = 'tuesday';

switch (day) {
	case 'monday':
		console.log('BUSY');
		console.log('Alot to do');
		break;
	case 'tuesday':
		console.log('Seconday of the week');
		console.log('Gaming');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Just play games');
		console.log('Study javascript');
		break;
	case 'friday':
		console.log('TGIF');
		break;
	default:
		console.log('Not a valid day');
}

// If else statement
if(day === 'monday'){
	console.log('BUSY');
	console.log('Alot to do');
} else if(day === 'tuesday' || day === ' wednesday'){
	console.log('Just play games');
	console.log('Study javascript');
} else if(day === 'thursday'){
	console.log('Today is Thursday');
} else if(day === 'friday'){
	console.log('Today is Friday');
} else if(day === 'saturday' || day === 'sunday'){
	console.log('Weekend');
} else {
	console.log('Invalid Day');
}

// Expression produce value  , Statement not produce value