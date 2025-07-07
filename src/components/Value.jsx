const Value = () => {
  const t = [1, 2, 3, 4];

  const m2 = t.map((val) => ` <li>${val}</li>`);

  return (
    <div>
      Value
      <h1>{m2}</h1>
    </div>
  );
};

export default Value;
