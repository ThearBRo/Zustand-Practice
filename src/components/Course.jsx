const Courses = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

const Course = (props) => {
  const { course } = props;

  const intialValue = 0;
  const sumOfExercises = course.parts.map((part) => part.exercises);
  const allNumExericses = sumOfExercises.reduce((p, s) => p + s, intialValue);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
      <p>total of exerises : {allNumExericses}</p>
    </div>
  );
};

export default Courses;
