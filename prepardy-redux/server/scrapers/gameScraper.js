const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");

const Game = require("../connections/games")



function seasonUrls(num) {
    return new Promise(resolve => {
        return axios
            .get(`https://j-archive.com/showseason.php?season=${num}`)
            .then(({ data }) => {
                const $ = cheerio.load(data);

                let links = []
                let url;
                $('a').each(function () {
                    url = `${$(this).attr('href')}`
                    if (url.includes("game_id")) {
                        links.push(url)
                    }
                });
                resolve(links)
            })
    });
}

var season_nums = [...Array(38).keys()];


async function urlFeeder(season) {

    var urls = await seasonUrls(season);

    urls.forEach(url => fetchGameData(url, season))
}


const fetchGameData = (gameUrl, season) => {
    return axios
        .get(gameUrl)
        .then(({ data }) => {
            const $ = cheerio.load(data);
 
            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))
            
            // added on DEC 3
            const p = "#jeopardy_round > table.round > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td"
            const dp = "#double_jeopardy_round > table.round > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td"
            const fp = "#final_jeopardy_round > table.final_round > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(1) > td"

            const categories = { p: [], dp: [], fp: "" };
            $(p).each(function () {
                categories["p"].push($(this).text());
            });
            $(dp).each(function () {
                categories["dp"].push($(this).text());
            });
            categories["fp"] = $(fp).text()
            //

            const urlIdRegex = /(.+game_id=)([0-9]+)/; // urlId will be match[2]
            const urlIdMatch = gameUrl.match(urlIdRegex)
            const urlId = parseInt(urlIdMatch[2])

            const airDateString = $("#game_title")
                .text()
                .split(" - ")[1];
            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [month, day, year].join('-');
            }

            const seasonNum = season


            var scoresArr = []

            const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
            scores.each(function (i, elem) {
                var x = ($(".score_positive", elem).text()).split("$").join(" ").trim().split(" ")
                // var scoresArr = []
                x.forEach(str => scoresArr.push(parseInt(str.replace(",", ""))))
                scoresArr.sort(function (a, b) {
                    return a - b;
                });
            })

            new Game({
                gameID: gameTitle,
                urlID: urlId,
                date: formatDate(airDateString),
                season: seasonNum,
                scores: scoresArr,
                rounds: categories
            }).save()

        })
        .catch(() => {
            console.log("GAME ERROR", gameUrl);
        });

}


// scraped_games = [37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10]
urlFeeder(10)