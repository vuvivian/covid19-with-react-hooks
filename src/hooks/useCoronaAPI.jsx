/*
 * @Author: vuvivian
 * @Date: 2020-05-07 16:55:49
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 13:46:45
 * @Descripttion: 自定义hook
 * @FilePath: /covid19-with-react-hooks/src/hooks/useCoronaAPI.jsx
 */
import {useState, useEffect, useCallback} from 'react';

const BASE_URL = "https://corona.lmao.ninja/v2";


/**
 * path: API 路径
 * initialData ：初始为空的默认数据
 * converter ：对原始数据的转换函数（默认是一个恒等函数）
 * refetchInterval ：重新获取数据的间隔（以毫秒为单位）
 */
export const useCoronaAPI = (path, { initialData = null, converter = (data) => data, refetchInterval = null}) => {
  const [data, setData] = useState(initialData);
  // 把 converter 函数用 useCallback 包裹了起来，把记忆化处理后的函数命名为 convertData，并且传入的 deps 参数为空数组 [] ，确保每次渲染都相同。然后把 useEffect 中所有的 converter 函数相应修改成 convertData。
  const convertData = useCallback(converter, []);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${path}`);
      const data  = await response.json();
      setData(convertData(data));
    };
  
    fetchData();
  
    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval);
      return () => clearInterval(intervalId);
    }
  },[convertData, path, refetchInterval]);

  return data;
}