/*
 * @Author: vuvivian
 * @Date: 2020-05-07 14:16:50
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 11:48:09
 * @Descripttion: 入口文件
 * @FilePath: /covid19-with-react-hooks/src/App.js
 */
import React, { useState } from 'react';
import './App.css';
import GlobalStats from "./components/GlobalStats";
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";
import {useCoronaAPI} from "./hooks/useCoronaAPI";
import HistoryChartGroup from "./components/HistoryChartGroup";

function App() {
  const [key, setKey] = useState('cases');

  const globalStats = useCoronaAPI("/all", {
    initialData: {},
    refetchInterval: 5000
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`,{
    initialData: {},
    converter: (data) => data.slice(0, 10),
  })
  
  return (
    <div className="App">
      <h1>COVID-19</h1>
      <GlobalStats stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)}/>   
      <CountriesChart data={countries} dataKey={key} />
      <HistoryChartGroup />
    </div>
  );
}

export default App;
