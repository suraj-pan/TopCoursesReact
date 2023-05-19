import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ Courses, Category }) => {
  let allCourses = [];
  const [Liked, setLiked] = useState([]);

  const getCourses = () => {
    if (Category === "All") {
      Object.values(Courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return Courses[Category];
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4 justify-center">
      {getCourses().map((course) => {
        {
          /* console.log(course); */
        }
        return (
          <Card
            key={course.id}
            Liked={Liked}
            setLiked={setLiked}
            course={course}
          />
        );
      })}
    </div>
  );
};

export default Cards;
