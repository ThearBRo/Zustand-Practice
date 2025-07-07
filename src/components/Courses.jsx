const Courses = () => {
  
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return <Course courses={courses} />;
};

const Course = (props) => {
  const { courses } = props;

  return (
    <div>
      <h1>Webdevelopment Curriculum</h1>
      {courses.map((course) => (
        <li key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
        </li>
      ))}
    </div>
  );
};

export default Courses;
