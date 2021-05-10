import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.cubyt.io/data/categories`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((er) => {
        setData([]);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default App;
