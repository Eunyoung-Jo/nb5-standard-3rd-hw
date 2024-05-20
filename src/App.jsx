import React from 'react';
import './App.css';

export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const filteredStudents = students.filter(student => student.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map(student => (
          <li
            key={student.name}
            onClick={() => alert(`이름: ${student.name}, 나이: ${student.age}, 점수: ${student.grade}`)}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
