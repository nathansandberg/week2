'use strict';

// function multiply(num,num2){
//     const numSum = num + num2;
//     return (numSum);
// }

// sum()



const airPort = {
    minHourlyCust: 23,
    maxHourlyCust: 65,
    avgCookCust: 6.3,
    cookiesArray: [],
    // createListItem: function(){
    //     //return li with hourly info
    // }
    randHourlyCust:
        function(){
            const minimum = Math.ceil(this.minHourlyCust);
            const maximum = Math.floor(this.maxHourlyCust);
            for (let i = 0; i < 15; i++) {
                const random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // red = random customers/hour
                const cooky = (random * this.avgCookCust);  //cooky = random customers x avg-cookies/customer = cookies/hr
                this.cookiesArray.push(Math.round(cooky));
            }
            //NEED TO ADD UP ALL ITEMS IN cookiesArray

            // for (let i = 0; i < this.cookiesArray.length; i++) {
            //     total += this.cookiesArray[i];
            //     console.log(total);

        }

};
airPort.randHourlyCust();
console.log(airPort.cookiesArray);
console.log(airPort.avgCookCust);

// const nathan = {

//     mind: 'critical',

//     body: 'stable',

//     soul: 'serious',

//     brainPower: function(){

//     for (i = 0; i < 6, i ++){

//     alert('This is getting messy' + this.mind + this.body + this.soul);

//     };

//     }

// }
// console.log(brainPower);
// const random = (Math.floor(Math.random() * 100));
// const avgCustDay = ((this.minHourlyCust * this.maxHourlyCust) / 2);
// const dailyCookies = (avgCustDay * this.AvgCookCust);
// console.log(dailyCookies);
// console.log(random);





// //sing is a function expression
// const thirdSong = {
//     title: 'Freebird',
//     lyrics: 'idk x alkdfjalskdjlkj',
//     length: 800,
//     isFavorite: false,
//     sing: function() {
//         /* Accessing its own properties with the all dreaded *this* */
//         alert('This is freebird singing');
//         console.log(this);

