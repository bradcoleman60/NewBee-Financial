import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"
export default function Learn() {



  return (
    <section>
      <h1>Education</h1>
      <table className="education-table">
        <thead>
          <tr>
            <th>Key Word</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Revenue</td>
            <td>Amount, excluding tax collected from customer, of revenue from satisfaction of performance obligation by transferring promised good or service to customer.
            </td>
          </tr>
          <tr>
            <td>Cash Flow</td>
            <td>Amount of cash inflow (outflow) from operating activities including discontinued operations.
            </td>
          </tr>
          <tr>
            <td>Net Income</td>
            <td>The portion of profit or loss for the period, net of income taxes, which is attributable to the parent.
            </td>
          </tr>
          <tr>
            <td>Cash</td>
            <td>A cash balance is the amount of money a company currently has available. This money is kept on hand to offset any unplanned cash outflows. If not for this safety buffer, businesses can find themselves unable to pay their bills.
            </td>
          </tr>
          <tr>
            <td>Earnings Per Share</td>
            <td>The amount of net income (loss) for the period available to each share of common stock or common unit outstanding during the reporting period
            </td>
          </tr>
          <tr>
            <td>Net Taxes Paid</td>
            <td>The amount of cash paid during the current period to foreign, federal, state, and local authorities as taxes on income, net of any cash received during the current period as refunds for the overpayment of taxes.
            </td>
          </tr>
          <tr>
            <td>Current Assets</td>
            <td>Sum of the carrying amounts as of the balance sheet date of all assets that are expected to be realized in cash, sold, or consumed within one year (or the normal operating cycle, if longer).
            </td>
          </tr>
          <tr>
            <td>Current Liabilities</td>
            <td>Total obligations incurred as part of normal operations that are expected to be paid during the following twelve months or within one business cycle, if longer.
            </td>
          </tr>
          <tr>
            <td>Closing Stock Price</td>
            <td>The price of each share of company stock as reflected by the last trade before the closing bell.
            </td>
          </tr><tr>
            <td>Stock Price Percentage Change</td>
            <td>The change is price from the previous day's closing reflected in a percentage format.
            </td>
          </tr><tr>
            <td>Number of Employees</td>
            <td>Total number of full-time employees. Useful for gauging the relative health of the company.
            </td>
          </tr><tr>
            <td>Price to Revenue Multiple</td>
            <td>Multiple is a valuation ratio that measures the price of a company's stock relative to its annual revenue. It is calculated by dividing the market capitalization of the company by its total revenue over the past 12 months.
            </td>
          </tr>
          </tbody>
      </table>
      
 </section>
  )
}






