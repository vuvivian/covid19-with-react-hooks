/*
 * @Author: vuvivian
 * @Date: 2020-05-07 14:16:50
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 14:54:16
 * @Descripttion: 入口文件
 * @FilePath: /covid19-with-react-hooks/src/App.js
 */
import React, { useState, useReducer} from 'react';
import './App.css';
import GlobalStats from "./components/GlobalStats";
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";
import {useCoronaAPI} from "./hooks/useCoronaAPI";
import HistoryChartGroup from "./components/HistoryChartGroup";

const initialState = {
  key: "cases", // 数据指标类别
  country: null, // 当前国家
  lastDays: {
    cases: 30,
    deaths: 30,
    recovered: 30,
  }, // 过去天数
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_KEY":
      return { ...state, key: action.key };
    case "SET_COUNTRY":
      return { ...state, country: action.country };
    case "SET_LASTDAYS":
      return {
        ...state,
        lastDays: { ...state.lastDays, [action.key]: action.days },
      };
    default:
      return state;
  }
}

// 用于传递 dispatch 的 React Context
export const AppDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { key, country, lastDays } = state;
  
  const globalStats = useCoronaAPI("/all", {
    initialData: {},
    // refetchInterval: 5000
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`,{
    initialData: {},
    converter: (data) => data.slice(0, 10),
  });

  const history = useCoronaAPI(`/historical/${country}`, {
    initialData: {},
    converter: (data) => data.timeline,
  });
  return (
    <AppDispatch.Provider value={dispatch}>
      <div className="App">
        <h1>COVID-19</h1>
        <GlobalStats stats={globalStats} />
        <SelectDataKey/>   
        <CountriesChart data={countries} dataKey={key} />
        {country ? (
          <>
            <h2>History for {country}</h2>
            <HistoryChartGroup history={history}  lastDays={lastDays}/>
          </>
        ) : (
          <h2>Click on a country to show its history.</h2>
        )}
      </div>
    </AppDispatch.Provider>
   
  );
}

export default App;
