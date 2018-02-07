'use strict';

const times = ['6am: ', '7am: ', '8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ', 'Total daily cookies: '];



function Stores (name, minHourlyCust, maxHourlyCust, avgCookCust) {

    this.name = name;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.avgCookCust = avgCookCust;
    this.cookiesArray = [];

}

Stores.prototype.updatePage = function () {
    const nathan = document.getElementById(this.name);
    for (let i = 0; i < this.cookiesArray.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = times[i] + this.cookiesArray[i];
        console.log('This is' + this.newLi);
        nathan.appendChild(newLi);
    };
},
Stores.prototype.totalDailyCookies = function() {
    let sum = 0;
    for (let i = 0; i < this.cookiesArray.length; i++){
        sum += this.cookiesArray[i];
    }
    this.cookiesArray.push(sum);
},

Stores.prototype.randHourlyCust = function() {
    const minimum = Math.ceil(this.minHourlyCust);
    const maximum = Math.floor(this.maxHourlyCust);
    for (let i = 0; i < 15; i++) {
        const random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        const cooky = (random * this.avgCookCust);
        this.cookiesArray.push(Math.round(cooky));
    }
};

const airport = new Stores('airport', 23, 65, 6.3);
const pioneerSquare = new Stores('pioneer', 3, 24, 1.2);
const powellsStore = new Stores('powells', 11, 38, 3.7);
const stJohnsStore = new Stores('stjohns', 20, 38, 2.3);
const waterFront = new Stores('waterfront', 2, 16, 4.6);


airport.randHourlyCust();
airport.totalDailyCookies();
airport.updatePage();
pioneerSquare.randHourlyCust();
pioneerSquare.totalDailyCookies();
pioneerSquare.updatePage();
powellsStore.randHourlyCust();
powellsStore.totalDailyCookies();
powellsStore.updatePage();
stJohnsStore.randHourlyCust();
stJohnsStore.totalDailyCookies();
stJohnsStore.updatePage();
waterFront.randHourlyCust();
waterFront.totalDailyCookies();
waterFront.updatePage();

console.log('poop');




