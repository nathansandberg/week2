'use strict';

const times = ['Store','6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Daily Total'];



function Stores (name, minHourlyCust, maxHourlyCust, avgCookCust) {

    this.name = name;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.avgCookCust = avgCookCust;
    this.cookiesArray = [];

}

Stores.prototype.randHourlyCust = function() {
    const minimum = Math.ceil(this.minHourlyCust);
    const maximum = Math.floor(this.maxHourlyCust);
    for (let i = 0; i < 16; i++) {
        if (i < 1){
            this.cookiesArray.push(this.name);
        } else{
            const random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            const cooky = (random * this.avgCookCust);
            this.cookiesArray.push(Math.round(cooky));
        }
    }
};

Stores.prototype.totalDailyCookies = function() {
    let sum = 0;
    for (let i = 1; i < this.cookiesArray.length; i++){
        sum += this.cookiesArray[i];
    }
    this.cookiesArray.push(sum);

};

Stores.prototype.renderRow = function(){
    const table = document.getElementById('table');
    const row = document.createElement('tr');
    table.appendChild(row);
    for (let i = 0; i < this.cookiesArray.length; i++){
        const cell = document.createElement('td');
        cell.textContent = this.cookiesArray[i];
        row.appendChild(cell);
    }
};

const airport = new Stores('Airport', 23, 65, 6.3);
const pioneerSquare = new Stores('Pioneer Place', 3, 24, 1.2);
const powellsStore = new Stores('Powells', 11, 38, 3.7);
const stJohnsStore = new Stores('St.johns', 20, 38, 2.3);
const waterFront = new Stores('Waterfront', 2, 16, 4.6);

function headMake() {
    const header = document.getElementById('header');
    const headerRow = document.createElement('tr');
    header.appendChild(headerRow);
    for(let i = 0; i < times.length; i++){
        const headerCell = document.createElement('td');
        headerCell.textContent = times[i];
        headerRow.appendChild(headerCell);
    }
};


airport.randHourlyCust();
airport.totalDailyCookies();
// airport.updatePage();
airport.renderRow();
headMake();


pioneerSquare.randHourlyCust();
pioneerSquare.totalDailyCookies();
pioneerSquare.renderRow();
// pioneerSquare.updatePage();
powellsStore.randHourlyCust();
powellsStore.totalDailyCookies();
powellsStore.renderRow();
// powellsStore.updatePage();
stJohnsStore.randHourlyCust();
stJohnsStore.totalDailyCookies();
stJohnsStore.renderRow();
// stJohnsStore.updatePage();
waterFront.randHourlyCust();
waterFront.totalDailyCookies();
waterFront.renderRow();
// waterFront.updatePage();

console.log('poop');




