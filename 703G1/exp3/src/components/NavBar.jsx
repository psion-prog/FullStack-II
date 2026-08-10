import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <style>
        {`
          .navbar {
            height: 70px;
            background: #2563eb;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 50px;
            box-sizing: border-box;
          }

          .navbar-title {
            color: white;
            font-size: 24px;
            font-weight: bold;
          }

          .navbar-links {
            display: flex;
            gap: 30px;
          }

          .navbar-links a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
          }

          .navbar-links a:hover {
            text-decoration: underline;
          }

          @media (max-width: 600px) {
            .navbar {
              padding: 0 20px;
            }

            .navbar-title {
              font-size: 20px;
            }

            .navbar-links {
              gap: 15px;
            }
          }
        `}
      </style>

      <nav className="navbar">

        <div className="navbar-title">
          StudentMS
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>

      </nav>
    </>
  );
}

export default NavBar;