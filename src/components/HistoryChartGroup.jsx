/*
 * @Author: vuvivian
 * @Date: 2020-05-08 11:45:58
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 12:46:50
 * @Descripttion: 历史趋势组
 * @FilePath: /covid19-with-react-hooks/src/components/HistoryChartGroup.jsx
 */
import React, { useState } from "react";

import HistoryChart from "./HistoryChart";
import transformHistory  from "../tools/util";

const HistoryChartGroup = (history = {} ) => {
  const [lastDays, setLastDays] = useState({
    Cases: 30,
    Deaths: 30,
    Recovered: 30
  });
  
  const handleLastDaysChange = (e, key) => {
    setLastDays((prev) => ({ ...prev, [key]: e.target.value }));
  };
  
  return (
    <div>
      <HistoryChart 
        title="Cases" 
        data={transformHistory(history.cases)} 
        lastDays={lastDays.Cases} 
        onLastDaysChange={(e) => handleLastDaysChange(e, 'cases')}
      />
      <HistoryChart 
        title="Deaths" 
        data={transformHistory(history.deaths)} 
        lastDays={lastDays.Deaths} 
        onLastDaysChange={(e) => handleLastDaysChange(e, 'deaths')}
      />
      <HistoryChart 
        title="Recovered" 
        data={transformHistory(history.recovered)} 
        lastDays={lastDays.Recovered} 
        onLastDaysChange={(e) => handleLastDaysChange(e, 'recovered')}
      />
    </div>
  )
}

export default HistoryChartGroup;