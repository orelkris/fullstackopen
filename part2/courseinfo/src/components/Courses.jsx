import Course from "./Course";

const Courses = ({ courses }) => {
  return (
    <section>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </section>
  );
};

export default Courses;
