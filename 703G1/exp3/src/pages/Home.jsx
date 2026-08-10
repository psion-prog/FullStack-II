import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <style>
        {`
          .home-page {
            min-height: calc(100vh - 80px);
            background: #f4f7fb;
          }

          .hero {
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
          }

          .hero h1 {
            font-size: 52px;
            margin: 0 0 20px;
            color: #1f2937;
          }

          .hero h1 span {
            color: #2563eb;
          }

          .hero p {
            max-width: 650px;
            font-size: 19px;
            line-height: 1.7;
            color: #6b7280;
            margin-bottom: 35px;
          }

          .home-buttons {
            display: flex;
            gap: 15px;
          }

          .home-btn {
            padding: 13px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            transition: 0.2s;
          }

          .login-btn-home {
            background: #2563eb;
            color: white;
          }

          .login-btn-home:hover {
            background: #1d4ed8;
          }

          .students-btn {
            background: white;
            color: #2563eb;
            border: 2px solid #2563eb;
          }

          .students-btn:hover {
            background: #2563eb;
            color: white;
          }

          .features {
            display: flex;
            justify-content: center;
            gap: 25px;
            padding: 30px 20px 60px;
          }

          .feature-card {
            width: 230px;
            background: white;
            padding: 25px;
            text-align: center;
            border-radius: 12px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
          }

          .feature-card h3 {
            color: #2563eb;
            margin-bottom: 10px;
          }

          .feature-card p {
            color: #6b7280;
            line-height: 1.5;
          }

          @media (max-width: 700px) {
            .hero h1 {
              font-size: 38px;
            }

            .features {
              flex-direction: column;
              align-items: center;
            }

            .home-buttons {
              flex-direction: column;
            }
          }
        `}
      </style>

      <div className="home-page">

        <section className="hero">

          <h1>
            Welcome to <span>StudentMS</span>
          </h1>

          <p>
            A simple and efficient Student Management System
            to manage student information, profiles, courses,
            grades and status.
          </p>

          <div className="home-buttons">

            <Link
              to="/login"
              className="home-btn login-btn-home"
            >
              Login
            </Link>

            <Link
              to="/dashboard/students"
              className="home-btn students-btn"
            >
              View Students
            </Link>

          </div>

        </section>

        <section className="features">

          <div className="feature-card">
            <h3>👨‍🎓 Students</h3>
            <p>
              View and manage student information easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>📚 Courses</h3>
            <p>
              Keep track of courses and academic details.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Grades</h3>
            <p>
              View student grades and academic performance.
            </p>
          </div>

        </section>

      </div>
    </>
  );
}

export default Home;