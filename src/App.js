import "./styles.css";
import SearchGiff from "./components/SearchGiff";
import GiffImages from "./components/GiffImages";
import Loading from "./components/Loading";
import { useState } from "react";

export default function App() {
  let [giffData, setGiffData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  function startGetRequest(val) {
    setIsLoading(true);
  }

  function GiffDataHandler(data) {
    setIsLoading(false);
    console.log(data);
    setGiffData(data);
  }

  return (
    <div className="App">
      <SearchGiff
        OnGiffData={GiffDataHandler}
        OnStartGetRequest={startGetRequest}
      />
      {isLoading ? <Loading /> : <GiffImages data={giffData} />}
    </div>
  );
}
