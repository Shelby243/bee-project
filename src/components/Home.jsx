import { FaTemperatureLow, FaLightbulb } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiPinDistanceFill } from "react-icons/ri";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://9rx4lmqkwj.execute-api.us-east-1.amazonaws.com/beev1/getData"
      );
      setLoading(false);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const sortedData = data
    .slice()
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const chartsData = sortedData.slice(-5);
  console.log(chartsData);
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const tempValues = [];
  const humidityValues = [];
  const photoValues = [];
  const distanceValues = [];
  function convertToHHMM(timestamp) {
    // Create a new Date object from the timestamp
    const date = new Date(timestamp);

    // Get hours and minutes from the Date object
    const hours = String(date.getHours()).padStart(2, "0"); // Ensure two digits
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensure two digits

    // Concatenate hours and minutes with a colon
    const HHMM = hours + ":" + minutes;

    return HHMM;
  }
  chartsData.forEach((obj) => {
    // Extract temperature and timestamp values
    const time = convertToHHMM(obj.timestamp);
    const tempObj = {
      tempValue: parseFloat(obj.temperature),
      timestamp: time, // Convert timestamp to milliseconds
    };

    // Extract humidity and timestamp values
    const humidityObj = {
      humidityValue: parseFloat(obj.humidity),
      timestamp: time, // Convert timestamp to milliseconds
    };
    const photoObj = {
      photoValue: parseFloat(obj.photoresistor),
      timestamp: time, // Convert timestamp to milliseconds
    };
    const distanceObj = {
      distanceValue: parseFloat(obj.distance),
      timestamp: time, // Convert timestamp to milliseconds
    };

    // Push the new objects to the respective arrays
    tempValues.push(tempObj);
    humidityValues.push(humidityObj);
    photoValues.push(photoObj);
    distanceValues.push(distanceObj);
  });
  console.log("Temp Values:", tempValues);
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        {sortedData?.map((item, index) => (
          <React.Fragment key={item.id}>
            {index === data.length - 1 && (
              <div className="card">
                <div className="card-inner">
                  <h3>TEMPERATURE</h3>
                  <FaTemperatureLow className="card_icon" />
                </div>
                <h1>{item.temperature} °C</h1>
              </div>
            )}
          </React.Fragment>
        ))}
        {sortedData?.map((item, index) => (
          <React.Fragment key={item.id}>
            {index === data.length - 1 && (
              <div className="card">
                <div className="card-inner">
                  <h3>HUMIDITY</h3>
                  <WiHumidity className="card_icon" />
                </div>
                <h1>{item.humidity} % </h1>
              </div>
            )}
          </React.Fragment>
        ))}
        {sortedData?.map((item, index) => (
          <React.Fragment key={item.id}>
            {index === data.length - 1 && (
              <div className="card">
                <div className="card-inner">
                  <h3>PHOTO RESISTOR</h3>
                  <FaLightbulb className="card_icon" />
                </div>
                <h1>{item.photoresistor} </h1>
              </div>
            )}
          </React.Fragment>
        ))}
        {sortedData?.map((item, index) => (
          <React.Fragment key={item.id}>
            {index === data.length - 1 && (
              <div className="card">
                <div className="card-inner">
                  <h3>DISTANCE</h3>
                  <RiPinDistanceFill className="card_icon" />
                </div>
                <h1>{item.distance} cm</h1>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={tempValues}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tempValue" stroke="#2962ff" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={humidityValues}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidityValue" stroke="#ff6d00" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={photoValues}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="photoValue" stroke="#2e7d32" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={distanceValues}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="distanceValue" stroke="#d50000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
export default Home;
