import React from "react";
import { useParams } from "react-router-dom";
import students from "../data/student";

function StudentProfile() {
  const { id } = useParams();

  // Find the student whose id matches the URL
  const student = students.find((std) => std.id === Number(id));

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="profile">
      <h1>Student Profile</h1>

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>City:</strong> {student.city}</p>
      <p><strong>Status:</strong> {student.status}</p>
    </div>
  );
}

export default StudentProfile;