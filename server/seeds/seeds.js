const fs = require("fs");

async function initFile () {

    fs.writeFile('finStats.json', "test data", (err) => err&&console.error(err))
}

async function appendCompany () {

    fs.appendFile('finStats.json', "more", (err) => err&&console.error(err) )
}

async function getCompanyStats () {

    const html = {
        
                name: companies.map(company => company),
                revenue: companies.map(company => tableData[company].revenue || tableData[company].revenue1),
                netIncome: companies.map(company => tableData[company].netIncome),
                cash: companies.map(company => tableData[company].cash || tableData[company].cash1),
                cashFlow: companies.map(company => tableData[company].cashFlow || tableData[company].cashFlow1),
                eps: companies.map(company => tableData[company].eps || tableData[company].eps1 ),
                curAsset: companies.map(company => tableData[company].currentAssets),
                curLiab: companies.map(company => tableData[company].currentLiabilities),
                curRatio: companies.map(company =>  tableData[company].currentAssets / tableData[company].currentLiabilities),
                taxesPaid: companies.map(company =>  tableData[company].taxesPaid || tableData[company].taxesPaid1)
              
};





}

function init () {



initFile()

for (var i=0; i<10; i++){
    appendCompany()
}

}

init();