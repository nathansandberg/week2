'use strict';

const times = ['6am: ', '7am: ', '8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total daily cookies: '];

// const airPort = {
//     minHourlyCust: 23,
//     maxHourlyCust: 65,
//     avgCookCust: 6.3,
//     cookiesArray: [],
//     // createListItem: function(){
//     //     //return li with hourly info
//     // }
//     randHourlyCust: function(){
//         const minimum = Math.ceil(this.minHourlyCust);
//         const maximum = Math.floor(this.maxHourlyCust);
//         for (let i = 0; i < 15; i++) {
//             const random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // red = random customers/hour
//             const cooky = (random * this.avgCookCust);  //cooky = random customers x avg-cookies/customer = cookies/hr
//             this.cookiesArray.push(Math.round(cooky));
//             console.log(Math.round(cooky));
//         }
//     },
//     updatePage: function() {
//         const nathan = document.getElementById('list');
//         console.log('this is' + nathan);
//         for (let i = 0; i < this.cookiesArray.length; i++) {
//             const newLi = document.createElement('li');
//             newLi.textContent = times[i] + this.cookiesArray[i];
//             console.log('this is' + newLi);
//             nathan.appendChild(newLi);
//         }
//     },
//     totalDailyCookies: function() {
//         let sum = 0; //declare sum OUTSIDE of for loop
//         for (let i = 0; i < this.cookiesArray.length; i++){
//             sum += this.cookiesArray[i];
//         }
//         this.cookiesArray.push(sum); //add sum to end of cookiesArray

//     },
// };
// airPort.randHourlyCust();  //call randHourlyCust
// airPort.totalDailyCookies(); //call totalDailyCookies (remember that ORDER DOES MATTER: example: you can't update the page with correct
// //info if you haven't calculated the random number first)
// airPort.updatePage();

function Stores (name, minHourlyCust, maxHourlyCust, avgCookCust) {

    this.name = name;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.avgCookCust = avgCookCust;
    this.cookiesArray = [];
    this.randHourlyCust = function(){
        const minimum = Math.ceil(this.minHourlyCust);
        const maximum = Math.floor(this.maxHourlyCust);
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // red = random customers/hour
            const cooky = (random * this.avgCookCust);  //cooky = random customers x avg-cookies/customer = cookies/hr
            this.cookiesArray.push(Math.round(cooky));
            console.log(Math.round(cooky));
        }
    },
    this.updatePage = function() {
        const nathan = document.getElementById('list');
        console.log('this is' + nathan); //THIS METHOD IS WHAT NEEDS THE WORK....I believe
        for (let i = 0; i < this.cookiesArray.length; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = times[i] + this.cookiesArray[i];
            console.log('this is' + newLi);
            nathan.appendChild(newLi);
        }
    },
    this.totalDailyCookies = function() {
        let sum = 0; //declare sum OUTSIDE of for loop
        for (let i = 0; i < this.cookiesArray.length; i++){
            sum += this.cookiesArray[i];
        }
        this.cookiesArray.push(sum); //add sum to end of cookiesArray
    };
};

Stores.prototype.createLi = function () {
    const li = document.createElement('li');
    li.textContent = 'this.';
};

const airport = new Stores('Airport', 23, 65, 6.3);
const pioneerSquare = new Stores('Pioneer Square', 3, 24, 1.2);










