import Sidebar from "../components/Sidebar";
import PageContainer from "../components/PageContainer";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Dashboard() {
  const [academicsCount, setAcademicsCount] = useState(0);
  const [facilitiesCount, setFacilitiesCount] = useState(0);

  // 🔥 NEW STATES
  const [recentAcademics, setRecentAcademics] = useState([]);
  const [recentFacilities, setRecentFacilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const academics = await axios.get("http://localhost:5000/api/academics");
      const facilities = await axios.get("http://localhost:5000/api/facilities");

      setAcademicsCount(academics.data.length);
      setFacilitiesCount(facilities.data.length);

      // 🔥 GET LAST 3 ITEMS
      setRecentAcademics(academics.data.slice(-3).reverse());
      setRecentFacilities(facilities.data.slice(-3).reverse());
    };

    fetchData();
  }, []);

  const chartData = [
    { name: "Academics", count: academicsCount },
    { name: "Facilities", count: facilitiesCount }
  ];

  return (
    <>
      <Sidebar />

      <PageContainer>
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>
  SmartCampus Dashboard
</h1>

          {/* 🔥 STATS CARDS */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px"
          }}>
            <div style={cardStyle}>
              <h2>Academics</h2>
              <p style={{ fontSize: "30px" }}>{academicsCount}</p>
            </div>

            <div style={cardStyle}>
              <h2>Facilities</h2>
              <p style={{ fontSize: "30px" }}>{facilitiesCount}</p>
            </div>
          </div>

          {/* 📊 CHART */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}>
            <BarChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="count" fill="#4CAF50" />
            </BarChart>
          </div>

          {/* 🔥 RECENT ACTIVITY */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "50px"
          }}>

            {/* Academics */}
            <div style={activityBox}>
              <h3>Recent Academics</h3>
              {recentAcademics.map((item) => (
                <p key={item._id}>📘 {item.title}</p>
              ))}
            </div>

            {/* Facilities */}
            <div style={activityBox}>
              <h3>Recent Facilities</h3>
              {recentFacilities.map((item) => (
                <p key={item._id}>🏫 {item.name}</p>
              ))}
            </div>

          </div>

        </div>
      </PageContainer>
    </>
  );
}

/* 🔥 STYLES */

const cardStyle = {
  padding: "30px",
  width: "200px",
  borderRadius: "12px",
  background: "#1e293b",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

const activityBox = {
  background: "#1e293b",
  color: "#fff",
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
};

export default Dashboard;