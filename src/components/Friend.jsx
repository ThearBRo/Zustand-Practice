const Friend = () => {
  const friend = [
    {
      name: "Thearith",
      age: 20,
    },
    {
      name: "Thearo",
      age: 18,
    },
    {
      name: "Theara",
      age: 14,
    },
  ];
  const guys = ["Thearith", "Thearo"];
  return (
    <div>
      <h1>
        {friend[0].name} {friend[0].age}
      </h1>
      <p>{guys}</p>
    </div>
  );
};

export default Friend;
