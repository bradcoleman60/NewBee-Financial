import React from "react";
// import Company from './Company'
import { useCompanyContext } from "../../../utils/companyContext";
import { idbPromise } from "../../../utils/helper";

export default function List() {

  const [testData, setTestData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await idbPromise("get");
      setTestData(data);
    };

    fetchData();
  }, []);

  console.log(testData.map(el => el.name));

  return (    <div>
    <h2>List of Names:</h2>
      {testData.map((el) => (
        <button key={el.id}>{el.name}</button>
      ))}
  </div>)
}