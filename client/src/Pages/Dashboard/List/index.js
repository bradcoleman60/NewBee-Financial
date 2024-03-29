import React from "react";

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

  return (
    <div>
      {testData.map((el) => (
        <button key={el.id}>{el.name}</button>
      ))}
    </div>
  );
}
