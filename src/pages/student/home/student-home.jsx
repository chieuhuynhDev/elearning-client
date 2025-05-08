import React from "react";
import Banner from "../homepage/Banner";
import InfoCoure from "../homepage/InfoCoure";
import ListCoursesByCat from "../list-courses-by-cat/list-courses-by-cat";
import Carousel from "../homepage/Carousel";
import Assess from "../homepage/Assess";
import Comment from "../homepage/Comment";

export default function StudentHome() {
  return (
    <div>
      <Banner />
      <InfoCoure />
      <ListCoursesByCat />
      <Carousel />
      <Assess />
      <Comment />
    </div>
  );
}
