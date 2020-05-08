/*
 * @Author: vuvivian
 * @Date: 2020-05-08 11:45:58
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 14:57:34
 * @Descripttion: 历史趋势组
 * @FilePath: /covid19-with-react-hooks/src/components/HistoryChartGroup.jsx
 */
import React, { useContext } from "react";

import HistoryChart from "./HistoryChart";
import transformHistory  from "../tools/util";
import { AppDispatch } from "../App";

const HistoryChartGroup = ({history = {}, lastDays = {}}) => {

  const dispatch = useContext(AppDispatch);

  const handleLastDaysChange = (e, key) => {
    e.persist();
    dispatch({ type: "SET_LASTDAYS", key, days: e.target.value });
  };
  return (
    <div>
      <HistoryChart 
        title="Cases" 
        data={transformHistory(history.cases)} 
        lastDays={lastDays.cases} 
        onLastDaysChange={e => handleLastDaysChange(e, 'cases')}
      />
      <HistoryChart 
        title="Deaths" 
        data={transformHistory(history.deaths)} 
        lastDays={lastDays.deaths} 
        onLastDaysChange={(e) => handleLastDaysChange(e, 'deaths')}
      />
      <HistoryChart 
        title="Recovered" 
        data={transformHistory(history.recovered)} 
        lastDays={lastDays.recovered} 
        onLastDaysChange={(e) => handleLastDaysChange(e, 'recovered')}
      />
    </div>
  )
}

export default HistoryChartGroup;