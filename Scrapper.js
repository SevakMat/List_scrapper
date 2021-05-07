const { listLoop } = require('./helpers');
const {TEST_URL} = require('./constants');

const parseScrapper = async (req, res) => {
    startScrapping(TEST_URL);

    // return res.json({ success: true });
};

const startScrapping = async (pageUrl) => {
    console.log("in startscrapper")
    // add en for english
    if (!pageUrl.includes('en')) {
        pageUrl = pageUrl.replace('https://www.list.am', 'https://www.list.am/en');
    }
    let categoryUrl = pageUrl.slice(pageUrl.indexOf('category'), pageUrl.indexOf('?'));
    let categoryList = categoryUrl.split('/');
    let categoryNumber = categoryList[1];
    console.log("cat_url",categoryUrl )
    console.log("categoryList",categoryList)
    console.log("categoryNumber",categoryNumber);

    if (categoryList[2]) {
        pageUrl = pageUrl.replace(`https://www.list.am/en/category/${categoryNumber}/${categoryList[2]}` , `https://www.list.am/en/category/${categoryNumber}`);
    }
    console.log(pageUrl)
    listLoop(pageUrl, categoryNumber);
}

module.exports = { parseScrapper };