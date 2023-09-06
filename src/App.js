import { useEffect, useState } from "react";
import "./App.css";
import Wrapper from "./container/Wrapper";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCoinList();
  }, []);
  const getCoinList = () => {
    axios
      .get(" https://api.coincap.io/v2/assets ")
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Wrapper data={data} />
    </div>
  );
}

export default App;
