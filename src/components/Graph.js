import React, { useContext, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CoronaContext from "../context/corona/coronaContext";
import Spinner from "./Spinner";

const Graph = () => {
  let data = [];
  const coronaContext = useContext(CoronaContext);

  const { history, getDailyData, setLoading, loading } = coronaContext;
  useEffect(() => {
    setLoading();
    getDailyData();
    // eslint-disable-next-line
  }, []);
  if (history.length > 0) {
    data = history.map((historydata) => ({
      name: historydata.day,
      Total: historydata.total.confirmed,
      Recovered: historydata.total.recovered,
      Deaths: historydata.total.deaths,
      Active: historydata.total.active,
    }));
    console.log(history);
    //console.log(day);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div align='center' style={{ width: "auto", height: "auto" }}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 20, left: 0 }}
      >
        <Line
          type='monotone'
          dataKey='Total'
          stroke='#004e92'
          activeDot={{ r: 6 }}
        />
        <Line
          type='monotone'
          dataKey='Active'
          stroke='#7b4397'
          activeDot={{ r: 6 }}
        />
        <Line
          type='monotone'
          dataKey='Recovered'
          stroke='#0f9b0f'
          activeDot={{ r: 6 }}
        />
        <Line
          type='monotone'
          dataKey='Deaths'
          stroke='#6f0000'
          activeDot={{ r: 6 }}
        />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' interval={3} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Graph;
