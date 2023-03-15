import React from "react";
import Company from "./Company";
import { Link } from "react-router-dom";
import './style.css'

export default function Data(props) {
    const companies = [{
        name: 'Amazon',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Tesla',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Meta',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Apple',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
]

  const companyColumns = companies.map((company, index) => (
    <Company
      key={index}
      name={company.name}
      revenue={company.revenue}
      cashFlow={company.cashFlow}
      netEarnings={company.netEarnings}
      cash={company.cash}
    />
  ));
  function handleClick (){
    window.location.replace('./learn')

  }

  return (
    <section>
      <h3>Financial Health</h3>
      <table className="financial-table">
        <thead>
          <tr>
            <th onClick = {handleClick}>Company</th>
            <th onClick = {handleClick}> Revenue </th>
            <th onClick = {handleClick}>Cash Flow</th>
            <th onClick = {handleClick}>Net Earnings</th>
            <th onClick = {handleClick}>Cash</th>
          </tr>
        </thead>
        <tbody>
          {companyColumns}
        </tbody>
      </table>
    </section>
  );
}
