import React, { useEffect, useState } from "react";
import students from "../data/student";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {

  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <>
      <style>
        {`
          .dashboard-page {
            min-height: calc(100vh - 70px);
            background: #f4f7fb;
            padding: 40px 50px;
          }

          .dashboard-header {
            margin-bottom: 30px;
          }

          .dashboard-header h1 {
            margin: 0;
            font-size: 32px;
            color: #1f2937;
          }

          .dashboard-header p {
            color: #6b7280;
            margin-top: 8px;
          }

          .welcome {
            color: #2563eb;
            font-weight: bold;
          }

          .stats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 35px;
          }

          .stat-card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
          }

          .stat-card h3 {
            margin: 0;
            color: #6b7280;
            font-size: 16px;
          }

          .stat-number {
            font-size: 35px;
            font-weight: bold;
            color: #2563eb;
            margin: 10px 0 0;
          }

          .dashboard-content {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
          }

          .dashboard-content h2 {
            margin-top: 0;
            color: #1f2937;
          }

          .dashboard-content p {
            color: #6b7280;
          }

          .students-btn {
            display: inline-block;
            margin-top: 15px;
            padding: 11px 20px;
            background: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 7px;
            font-weight: bold;
          }

          .students-btn:hover {
            background: #1d4ed8;
          }

          @media (max-width: 700px) {
            .dashboard-page {
              padding: 30px 20px;
            }

            .stats-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="dashboard-page">

        <div className="dashboard-header">

          <h1>Dashboard</h1>

          {username && (
            <p>
              Welcome, <span className="welcome">{username}</span> 👋
            </p>
          )}

        </div>

        <div className="stats-container">

          <div className="stat-card">
            <h3>Total Students</h3>
            <p className="stat-number">
              {students.length}
            </p>
          </div>

          <div className="stat-card">
            <h3>Active Students</h3>
            <p className="stat-number">
              {
                students.filter(
                  (student) => student.status === "Active"
                ).length
              }
            </p>
          </div>

          <div className="stat-card">
            <h3>Inactive Students</h3>
            <p className="stat-number">
              {
                students.filter(
                  (student) => student.status === "Inactive"
                ).length
              }
            </p>
          </div>

        </div>

        <div className="dashboard-content">

          <h2>Student Management</h2>

          <p>
            View student information, courses, grades,
            profiles and status.
          </p>

          <Link
            to="students"
            className="students-btn"
          >
            View All Students
          </Link>

          <Outlet />

        </div>

      </div>
    </>
  );
}

export default Dashboard;