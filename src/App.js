/*
 * @Author: vuvivian
 * @Date: 2020-05-07 14:16:50
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-07 16:41:05
 * @Descripttion: 入口文件
 * @FilePath: /covid19-with-react-hooks/src/App.js
 */
import React, { useState, useEffect } from 'react';
import './App.css';
import GlobalStats from "./components/GlobalStats";
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";

const BASE_URL = "https://corona.lmao.ninja/v2";

function App() {
  const [globalStats, setGlobalStats] = useState({});
  const [key, setKey] = useState('cases');
  const [countries, setCountries] = useState([])

  // 第二个参数使用空数组可以确保 Effect 只会在组件初次渲染后执行
  useEffect(() => {
    const fetchGlobalStats = async () => {
      const response = await fetch(`${BASE_URL}/all`);
      const data = await response.json();
      setGlobalStats(data);
    };

    // 通过定义了一个 fetchGlobalStats 异步函数并进行调用从而获取数据，而不是直接把这个 async 函数作为 useEffect 的第一个参数；
    fetchGlobalStats();

    // 每 5 秒重新获取一次
    const intervalId = setInterval(fetchGlobalStats, 5000);

    // 返回一个函数，用于销毁之前创建的 Interval
    return () => clearInterval(intervalId);
  }, []);

  useEffect (() => {
    const fetchCountries = async () => {
      const response = await fetch(`${BASE_URL}/countries?sort=${key}`);
      const data = await response.json();
      setCountries(data.slice(0, 10));
      console.log(countries);
    };
    fetchCountries();
  }, [key]);
  
  return (
    <div className="App">
      <h1>COVID-19</h1>
      <GlobalStats stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)}/>   
      <CountriesChart data={countries} dataKey={key} />
    </div>
  );
}

export default App;
