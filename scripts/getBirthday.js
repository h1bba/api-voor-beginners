// const baseURL = 'https://fdnd.directus.app/';
// // parameter
// const endpointMe = 'items/person/226';


// domein en parameter samen koppelen in de variabele myURL
// const myURL = baseURL + endpointMe;
// console.log(myURL);

// getdata is een functie die onderin al geschreven is, de functie fetcht de link. Deze fetch data stoppen we in een functie genaamd UfukData
getData(myURL).then(UfukData => {
    // console.log(UfukData.data.name);

    // variabele genaamd myName bevat de data.name van de json
    let myBDay = UfukData.data.birthdate;
    // console log de variabele zodat je kan controleren
    console.log("myBDay");

    // de h1 vinden van de html via queryselector
    let deH4 = document.querySelector("h4");

    // de content van de H1 replacen met de content van myName
    deH4.textContent = myBDay;




});




async /*9*/ function getData(URL) {
    return ( //8
        fetch(URL) //1
            .then( //2
                response /*3*/ => response.json() //4
            )
            .then( //5
                jsonData /*6*/ => { return jsonData } //7
            )
    );
}









/**************/
/* SPIEKBRIEF */
/**************/

// getMyBirthday();

// normal

// function getMyBirthday() {
// 	getData(urlMe).then( data => {

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// add birthday
// 		else {
// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = myBirthdate;
// 			myBirthday.dateTime = myBirthdate;
// 			mySection.append(myBirthday);
// 		}
// 	});
// }



// fancy

// function getMyBirthday() {
// 	getData(urlMe).then( data => {

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// convert birthdate to readable date
// 		else {
// 			const myBirthdateTimestamp = Date.parse(myBirthdate);
// 			const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
// 			myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
// 			myBirthday.dateTime = myBirthdate;

// 			mySection.append(myBirthday);
// 		}
// 	});
// }