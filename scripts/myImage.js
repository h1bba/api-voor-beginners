

const mySection = document.querySelector('section:nth-of-type(1)');



getData(myURL).then(ufukData => {
    let ufukIMG = ufukData.data.avatar;
    let myName = ufukData.data.name;
    console.log(ufukIMG);

    let myAvatar = document.querySelector("img");


    const myImg = document.createElement("img");
    myImg.src = ufukIMG;
    myImg.alt = myName;
    mySection.appendChild(myImg);
});









/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});
// }