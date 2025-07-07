const Hello = (props) => {
  console.log(props.name, props.age);
  return (
    <div>
      Hello {props.name} age : {props.age}
    </div>
  );
};

export default Hello;
