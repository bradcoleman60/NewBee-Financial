// Require Axios
const axios = require("axios");

//Require Mongoose
const mongodb = require("mongodb").MongoClient;

//Connect to DB
const uri = "mongodb://localhost/financeDB";
const client = new mongodb(uri, { useNewUrlParser: true });

//Connect to DB
const connection = require("../config/connection");

//Require and use  Models
// import { CompanyData, TagData} from ('../models')

//Require the cik_list object
const cik = require("./cik_list");

//Create an array that contains all CIK numbers
const cikArray = cik.map((item) => item.CIK);

//Endpoints to  SEC.GOV

// Total Revenue
const urlRevenue =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax/USD/CY2022Q3.json";
const urlRevenue1 =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2022Q3.json";

// Net Earnings / Loss
const urlNetIncome =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/NetIncomeLoss/USD/CY2022Q3.json";

//Cash
const urlCash =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/CashAndCashEquivalentsAtCarryingValue/USD/CY2022Q3I.json";
const urlCash1 =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/Cash/USD/CY2022Q3I.json";

//Cash Flow
const urlCashFlow =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/NetCashProvidedByUsedInOperatingActivities/USD/CY2022.json";
const urlCashFlow1 =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/NetCashProvidedByUsedInOperatingActivities/USD/CY2021.json";

//Earnings Per Share
const urlEps =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeLossFromContinuingOperationsPerDilutedShare/USD-per-shares/CY2022.json";
const urlEps1 =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/EarningsPerShareDiluted/USD-per-shares/CY2022Q3.json";

//Current Assets
const urlCurrentAsset =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/AssetsCurrent/USD/CY2022Q3I.json";
const urlCurrentLiabilities =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/LiabilitiesCurrent/USD/CY2022Q3I.json";

//Taxes Paid
const urlIncomeTax =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeTaxesPaid/USD/CY2022.json";
const urlIncomeTax1 =
  "https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeTaxesPaidNet/USD/CY2022.json";

// This a an async function that does an fetch call to the end routes referred to above.
const getNewData = async () => {
  try {
    //Fetch Revenues
      const response = await axios.get(urlRevenue);
      const data = response.data.data;

    //Fetch Revenues1
      const responseRev1 = await axios.get(urlRevenue1);
      const dataRev1 = responseRev1.data.data;

    //Fetch Net Income / (Loss)
      const responseNet = await axios.get(urlNetIncome);
      const dataNet = responseNet.data.data;

    //Fetch Cash Balance
     const responseCash = await axios.get(urlCash);
      const dataCash = responseCash.data.data;

    //Fetch Cash Balance
      const responseCash1 = await axios.get(urlCash1);
      const dataCash1 = responseCash1.data.data;

    //Fetch Cash Flow
      const responseCashFlow = await axios.get(urlCashFlow);
      const dataCashFlow = responseCashFlow.data.data;

    //Fetch Cash Flow1
      const responseCashFlow1 = await axios.get(urlCashFlow1);
      const dataCashFlow1 = responseCashFlow1.data.data;

    //Fetch EPS
      const responseEps = await axios.get(urlEps);
      const dataEps = responseEps.data.data;

    //Fetch EPS 1
      const responseEps1 = await axios.get(urlEps1);
      const dataEps1 = responseEps1.data.data;

    //Fetch Current Assets
      const responseCurrentAssets = await axios.get(urlCurrentAsset);
      const dataCurrentAssets = responseCurrentAssets.data.data;

    //Fetch Current Liabilities
      const responseCurrentLiabilities = await axios.get(urlCurrentLiabilities);
      const dataCurrentLiabilities = responseCurrentLiabilities.data.data;

    //Income Tax Paid
       const responseTaxesPaid = await axios.get(urlIncomeTax);
      const dataTaxesPaid = responseTaxesPaid.data.data;

    //Income Tax Paid1
       const responseTaxesPaid1 = await axios.get(urlIncomeTax1);
      const dataTaxesPaid1 = responseTaxesPaid1.data.data;

    const tableData = {};

    // Initialize the table data object with empty arrays for each cik
    for (const cik of cikArray) {
      tableData[cik] = {
        revenue: null,
        revenue1: null,
        netIncome: null,
        cash: null,
        cashFlow: null,
        cashFlow1: null,
        eps: null,
        eps1: null,
        currentAssets: null,
        currentLiabilities: null,
        taxesPaid: null,
        taxesPaid1: null,
      };
    }

    // Populate the table data object with the revenue values for each cik
    for (const item of data) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].revenue = value.toFixed(1);
      }
    }

    // Populate the table data object with the revenue values for each cik
    for (const item of dataRev1) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].revenue1 = value.toFixed(1);
      }
    }

    //Populate the table data object with the net income/ loss values for each cik
    for (const item of dataNet) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].netIncome = value.toFixed(1);
      }
    }

    //Populate the table data object with cash values for each cik
    for (const item of dataCash) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].cash = value.toFixed(1);
      }
    }

    //Populate the table data object with cash values for each cik
    for (const item of dataCash1) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].cash1 = value.toFixed(1);
      }
    }

    //Populate the table data object with cash values for each cik
    for (const item of dataCashFlow) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].cashFlow = value.toFixed(1);
      }
    }

    //Populate the table data object with cash values for each cik
    for (const item of dataCashFlow1) {
      const cik = item["cik"];
      const value = parseInt(item["val"]) / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].cashFlow1 = value.toFixed(1);
      }
    }

    // Populate the table data object with EPS (NOTE NO NEED TO DIVIDE BY 10000000) values for each cik
    for (const item of dataEps) {
      const cik = item["cik"];
      const value = item["val"];
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].eps = value;
      }
    }

    // Populate the table data object with EPS (NOTE NO NEED TO DIVIDE BY 10000000) values for each cik
    for (const item of dataEps1) {
      const cik = item["cik"];
      const value = item["val"];
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].eps1 = value;
      }
    }

    // Populate the table data object with Current Assets  values for each cik
    for (const item of dataCurrentAssets) {
      const cik = item["cik"];
      const value = item["val"] / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].currentAssets = value.toFixed(1);
      }
    }

    // Populate the table data object with Current Liabilities values for each cik
    for (const item of dataCurrentLiabilities) {
      const cik = item["cik"];
      const value = item["val"] / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].currentLiabilities = value.toFixed(1);
      }
    }

    // Populate the table data object with Taxes Paid values for each cik
    for (const item of dataTaxesPaid) {
      const cik = item["cik"];
      const value = item["val"] / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].taxesPaid = value.toFixed(1);
      }
    }

    // Populate the table data object with Taxes Paid values for each cik
    for (const item of dataTaxesPaid1) {
      const cik = item["cik"];
      const value = item["val"] / 1000000;
      if (tableData.hasOwnProperty(cik)) {
        tableData[cik].taxesPaid1 = value.toFixed(1);
      }
    }
    //   console.log("table data: ",tableData)

    //Send to Mongo DB - financeDB

    client.connect((err) => {
      const collection = client.db("financeDB").collection("companyData");

      collection.insertOne(tableData, (err, result) => {
        if (err) throw err;
        console.log("Data inserted successfully");
        client.close();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};

getNewData();




