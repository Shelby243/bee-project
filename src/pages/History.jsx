import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function History() {
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

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "temperature", headerName: "Temperature", width: 160 },
    { field: "humidity", headerName: "Humidity", width: 160 },
    {
      field: "light",
      headerName: "Light",
      width: 160,
    },
    {
      field: "distance",
      headerName: "Distance",
      width: 160,
    },
    {
      field: "sound",
      headerName: "Sound",
      width: 160,
    },
    {
      field: "timestamp",
      headerName: "Timestamp",
      width: 160,
    },
  ];
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear().toString().slice(2)} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    return formattedDate;
  }
  const transformedData = sortedData.map((item, index) => ({
    id: index + 1, // Incremental ID
    temperature: item.temperature,
    humidity: item.humidity,
    light: item.photoresistor,
    sound: item.microphone,
    distance: item.distance,
    timestamp: formatTimestamp(item.timestamp),
  }));

  return (
    <div style={{ height: 650, width: "100%", backgroundColor: "#fff" }}>
      <DataGrid
        rows={transformedData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
