import { useState } from "react";

const Stat = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  //   const Statistic = (props) => {};

  const all = good + bad + neutral;

  const positive = good / (good + bad + neutral) || 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setBad(bad + 1)}>neutral</button>
      <button onClick={() => setNeutral(neutral + 1)}>bad</button>
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        positive={positive}
      />
    </div>
  );
};
//==== Stat ====//
const Statistic = (props) => {
  const { good, bad, neutral, all, positive } = props;

  if ((good || bad || neutral) === 0) {
    return <div>No feedback</div>;
  } else {
    return (
      <div>
        <sp>good {good}</sp>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>positive {positive}</p>
      </div>
    );
  }
};

export default Stat;
