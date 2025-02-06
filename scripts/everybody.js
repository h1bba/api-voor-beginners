const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const everybodyURL = baseURL + endpointSquad;

getData(everybodyURL).then(everybodyData => {
    // console.log(everybodyData);

    let allPersons = everybodyData.data;
    console.log(allPersons);

    allPersons.forEach(person => {
        let personName = person.name;
        let personIMG = person.avatar;
        let personWebsite = person.website;
        // console.log(person.name);
        let everybodySection = document.querySelector('section:nth-of-type(2)');

        let getalTot1 = Math.random();
        let getalTot5 = getalTot1 * 5;
        let afgerondGetalTussen0en4 = Math.floor(getalTot5);
        let afgerondGetalTussen1en5 = afgerondGetalTussen0en4 + 1;




        if (personIMG) {
            // do nothing
        } else {
            personIMG = `images/placeholder${afgerondGetalTussen1en5}.svg`;
        }
        
        let personHTML = 

        `<article>
        <h3>${personName}</h3>
        <img src="${personIMG}" alt="${personName}">
        <a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
        </article>`
        

        everybodySection.insertAdjacentHTML('beforeend', personHTML);
    });
})













/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }