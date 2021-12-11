// const cheerio = require("cheerio");
// const axios = require("axios");


// const Clue = require("../connections/clues");

// function seasonUrls(num) {
//     return new Promise(resolve => {
//         return axios
//             .get(`https://j-archive.com/showseason.php?season=${num}`)
//             .then(({ data }) => {
//                 const $ = cheerio.load(data);

//                 let links = []
//                 let url;
//                 $('a').each(function () {
//                     url = `${$(this).attr('href')}`
//                     if (url.includes("game_id")) {
//                         links.push(url)
//                     }
//                 });
//                 resolve(links)
//             })
//     });
// }


// // array of numbers (one for each season) to be passed into urlPasser
// var seasonNums = [...Array(37).keys()].reverse()
// console.log(seasonNums)


// async function urlFeeder(season) {

//     var urls = await seasonUrls(season);

//     // setTimeout(function () {
//     //     // var urls = await seasonUrls(season);
//     //     urls.forEach(url => fetchGameData(url))
//     // }, 10000)

//     // urls.forEach(setTimeout(function () {
//     //     fetchGameData(url)
//     // }), 15000);

//     urls.forEach(function (url) {
//         fetchGameData(url);

//         setTimeout(function () {
//             console.log("PAUSING BETWEEN URLS")
//         }, 10000);
//     })


    
 
//     // urls.forEach(url => fetchGameData(url))
// }

// // takes in season num, index number of url, and creates interval


// const fetchGameData = gameUrl => { // changed gameId to arr

//     return axios
//         .get(gameUrl)
//         .then(({ data }) => {

//             const $ = cheerio.load(data);

//             var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))

//             const categories = [];
//             $(".category_name").each(function () {
//                 categories.push($(this).text());
//             });

//             const clueArr = []
    
//             $(".clue").each(function (i, elem) {

//                 const clue = new Clue({}) // initialize new Clue object/document
//                 clue.gameID = gameTitle  // sets gameID field 

//                 const clueId = `${gameTitle}${i}`; // ADDED ON DECEMBER 12;
//                 clue.id = clueId; // ADDED ON DECEMBER 12;


//                 let category, value; // sets category and value fields
//                 if (i < 30) {
//                     category = categories[i % 6];
//                     value = Math.floor(i / 6 + 1) * 200;
//                 } else if (i < 60) {
//                     category = categories[i % 6 + 6];
//                     value = Math.floor((i - 30) / 6 + 1) * 400;
//                 } else if (i === 60) {
//                     category = categories[12];
//                 }
//                 clue.category = category; 
//                 clue.value = value;


//                 let question = $(".clue_text", elem).html(); // sets question field
//                 if (question != null) {
//                     if (question.includes("&amp;")) {
//                         question = question.replace(/&amp;/g, "&")
//                     }
//                     if (question.includes("<")) {   
//                         if (question.includes('.jpg"') || question.includes("<a") || question.includes('www.j-archive.com/media')) {
//                             clue.img = true;
//                         }
//                         question = question.replace(/<.+?>/g, "" )
//                         // clue.img = true // if an img tag is found, img field is set to true, else its blank
//                     }
//                     if (question.includes("//")) {
//                         question = question.replace("//", "");
//                     }
//                 }
//                 clue.question = question;

//                 let answer; // sets answer field
//                 if (i < 60) {
//                     const mouseOverContent = $("div", elem).attr("onmouseover");
//                     answer = $(".correct_response", mouseOverContent).text();
//                 } else if (i === 60) {
//                     const mouseOverContent = $(".final_round div").attr("onmouseover");
//                     answer = $("em", mouseOverContent).text();
//                 }
//                 clue.answer = answer;

//                 const isDailyDouble = !!$(".clue_value_daily_double", elem).length;
//                 if (isDailyDouble) clue.dd = isDailyDouble
    

//                 if (clue.question != "") {
//                     clueArr.push(clue);
//                 }
//             })
//             // .catch((error) => console.log(error))
//             // console.log(clueArr)

//             Clue.insertMany(clueArr);

//         })
//         .catch((error) => {
     
//             console.log("GAME ERROR", gameUrl);
//         });

// }


// // scraped_seasons = [37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15]
// urlFeeder(14)
