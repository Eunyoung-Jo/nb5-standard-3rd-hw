import React from "react";

function FilterButtons({ setFilteredStudents, initialStudents }) {
  const filterByAge = (minAge) => {
    const filtered = initialStudents.filter((student) => student.age >= minAge);
    setFilteredStudents(filtered);
  };

  const filterByGrade = (grade) => {
    const filtered = initialStudents.filter((student) => student.grade === grade);
    setFilteredStudents(filtered);
  };

  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
