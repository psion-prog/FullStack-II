import React from "react";
import { Link } from "react-router-dom";
import students from "../data/student";

function StudentList() {
  return (
    <>
      <style>
        {`
          .students-page {
            padding: 35px 50px;
            background: #f4f7fb;
            min-height: calc(100vh - 70px);
          }

          .students-page h1 {
            color: #1f2937;
            margin-bottom: 8px;
          }

          .students-subtitle {
            color: #6b7280;
            margin-bottom: 30px;
          }

          .student-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .student-card {
            background: white;
            padding: 22px;
            border-radius: 12px;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
            transition: 0.2s;
          }

          .student-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 7px 18px rgba(0, 0, 0, 0.12);
          }

          .student-card h3 {
            margin-top: 0;
            margin-bottom: 15px;
            color: #2563eb;
          }

          .student-info {
            color: #4b5563;
            margin: 8px 0;
          }

          .profile-btn {
            display: inline-block;
            margin-top: 15px;
            padding: 9px 16px;
            background: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 7px;
            font-weight: bold;
          }

          .profile-btn:hover {
            background: #1d4ed8;
          }
        `}
      </style>

      <div className="students-page">

        <h1>Student List</h1>

        <p className="students-subtitle">
          View and manage all registered students
        </p>

        <div className="student-grid">

          {students.map((student) => (
            <div className="student-card" key={student.id}>

              <h3>{student.name}</h3>

              <p className="student-info">
                <strong>Course:</strong> {student.course}
              </p>

              <p className="student-info">
                <strong>Grade:</strong> {student.grade}
              </p>

              <p className="student-info">
                <strong>City:</strong> {student.city}
              </p>

              <Link
                to={`/dashboard/profile/${student.id}`}
                className="profile-btn"
              >
                View Profile
              </Link>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default StudentList;