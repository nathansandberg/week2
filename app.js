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
    randHourlyCust:
        function(){
            const minimum = Math.ceil(this.minHourlyCust);
            const maximum = Math.floor(this.maxHourlyCust);
            for (let i = 0; i < 14; i++) {
                const red = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // red = random customers/hour
                //why does this work as it doesn't generate a random number every time? or does it?
                const cooky = (red * this.avgCookCust);  //cooky = random customers x avg-cookies/customer = cookies/hr
                this.cookiesArray.push(cooky);
            }
        }
};


airPort.randHourlyCust();
console.log(airPort.cookiesArray);


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
//
