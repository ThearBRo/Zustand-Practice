const HeaderJR = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <h1>
        My name is : {props.name}, and my age is {props.age}, i was born in :
        {bornYear()}
      </h1>
    </div>
  );
};

const Header = () => {
  const name = "Thearith";
  const age = 20;

  const allPerson = [
    {
      name: "Thearith",
      age: 20,
    },
    {
      name: "Peter",
      age: 20,
    },
    {
      name: "Alex",
      age: 30,
    },
    {
      name: " Paul",
      age: 21,
    },
  ];

  return (
    <div>
      <h1>Normal Data : </h1>
      <HeaderJR name={name} age={age} />
      <br />
      <br />
      <h1>Map Data : </h1>
      {allPerson.map((person) => (
        <HeaderJR name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default Header;
