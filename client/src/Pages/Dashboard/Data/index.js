import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { idbPromise } from "../../../utils/helper";
import "./style.css";

export default function Data(props) {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const idbCompanies = await idbPromise("get");
      setCompanies(idbCompanies);
    };

    fetchData();
  }, []);

  const selectedProps = [
    { label: "Revenue:", property: "revenue" },
    { label: "Cash Flow:", property: "cashFlow" },
    { label: "Net Earnings:", property: "netIncome" },
    { label: "Earnings Per Share:", property: "eps" },
    { label: "Cash Balance:", property: "cash" },
    { label: "Ticker Symbol:", property: "ticker" },
    { label: "Stock Exchange:", property: "exchange" },

  ];

  function handleClick() {
    window.location.replace("./learn")
  }

  return (
    <table className="financial-table">
      <thead>
        <tr>
          <th>(In millions, except per share data)</th>

          {companies.map(company => (
            <th key={company.name}>{company.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {selectedProps.map(prop => (
          <tr key={prop.label}>
            <td onClick={handleClick}>{prop.label}</td>
            {companies.map(company => (
              <td key={company.name}>{company[prop.property] || "N/A"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
