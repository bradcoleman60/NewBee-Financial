module.exports = async function getCompanyStats () {

    const name = ['American Airlines Group Inc.', 'Marqeta, Inc.', 'AMAZON.COM, INC.', 'Okta, Inc.', 'Block, Inc.', 'PAGERDUTY, INC.', 'SCHWAB CHARLES CORP', 'Apple Inc.', 'NIKE, Inc.', 'Tesla, Inc.'];


    const company = {
        
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
              
}}

 
