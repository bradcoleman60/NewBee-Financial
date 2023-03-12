//Require Axios
const axios = require('axios');

//Require dotenv to store api key outside of git repo
require('dotenv').config()

//Placeholder until we can connect to state and get tickers from user's savedCompanies collection
const tickers = [ 'MQ']

//Creates and empty object to be populated with the api fetch call with the data below
const tickerData = {};

//This iterates through the list of tickers in the user's savedCompanies and fetches data from yahoo finance api
const fetchTickerData = (el) => {
  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
    params: {symbol: el, region: 'US'},
    headers: {
      // 'X-RapidAPI-Key': 'aef2874490mshcdc643d40f36d95p1f1416jsn10af74644bac',
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  
  //Fetch Request to Yahoo.com API.  "el" each ticker in user's savedCompanies list
  return axios.request(options).then(function (response) {
    const data = response.data;
    tickerData[el] = { 
      closingPrice: data.price.regularMarketPrice.fmt,
      priceChange: data.price.regularMarketChangePercent.fmt,
      fullTimeEmployees: data.summaryProfile.fullTimeEmployees,
      priceToRevenueMultiple: data.summaryDetail.priceToSalesTrailing12Months.fmt
    };
  }).catch(function (error) {
    console.error(error);
  });
};

//Map the tickers in the user's savedCompanies and pass to the fetchTickerData function
const promises = tickers.map(fetchTickerData);

//Complete the entire fetch before rendering the tickerData object
Promise.all(promises).then(() => {
  console.log(tickerData); 
});
