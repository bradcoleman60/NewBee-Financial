const express = require('express');
const axios = require('axios');
const app = express();

//Endpoints to  SEC.GOV

// Total Revenue
const urlRevenue = 'https://data.sec.gov/api/xbrl/frames/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax/USD/CY2022Q3.json';
const urlRevenue1 = 'https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2022Q3.json';

// Net Earnings / Loss
const urlNetIncome = 'https://data.sec.gov/api/xbrl/frames/us-gaap/NetIncomeLoss/USD/CY2022Q3.json';

//Cash 
const urlCash ='https://data.sec.gov/api/xbrl/frames/us-gaap/CashAndCashEquivalentsAtCarryingValue/USD/CY2022Q3I.json';
const urlCash1 ='https://data.sec.gov/api/xbrl/frames/us-gaap/Cash/USD/CY2022Q3I.json';

//Cash Flow
const urlCashFlow ='https://data.sec.gov/api/xbrl/frames/us-gaap/NetCashProvidedByUsedInOperatingActivities/USD/CY2022.json';
const urlCashFlow1 ='https://data.sec.gov/api/xbrl/frames/us-gaap/NetCashProvidedByUsedInOperatingActivities/USD/CY2021.json';

//Earnings Per Share
const urlEps ='https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeLossFromContinuingOperationsPerDilutedShare/USD-per-shares/CY2022.json';
const urlEps1 ='https://data.sec.gov/api/xbrl/frames/us-gaap/EarningsPerShareDiluted/USD-per-shares/CY2022Q3.json'

//Current Assets 
const urlCurrentAsset = 'https://data.sec.gov/api/xbrl/frames/us-gaap/AssetsCurrent/USD/CY2022Q3I.json'
const urlCurrentLiabilities = 'https://data.sec.gov/api/xbrl/frames/us-gaap/LiabilitiesCurrent/USD/CY2022Q3I.json'

//Taxes Paid
const urlIncomeTax = 'https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeTaxesPaid/USD/CY2022.json'
const urlIncomeTax1 = 'https://data.sec.gov/api/xbrl/frames/us-gaap/IncomeTaxesPaidNet/USD/CY2022.json'