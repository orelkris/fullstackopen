import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <td>
    {text} {value}
  </td>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={total} />
        </tr>
        <tr>
          <StatisticLine text="average" value={(good - bad) / total} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={(good / total) * 100} /> %
        </tr>
      </tbody>
    </table>
  );
};

const DisplayStatistics = ({ good, neutral, bad }) => {
  if (isNotZero(good) || isNotZero(neutral) || isNotZero(bad)) {
    return (
      <>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  }

  return <>No feedback given</>;
};

const isNotZero = (num) => num != 0;

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const Feedback = {
    GOOD: "good",
    NEUTRAL: "neutral",
    BAD: "bad",
  };

  const handleFeedback = (type) => {
    switch (type) {
      case Feedback.GOOD:
        return setGoodFeedback(goodFeedback + 1);
      case Feedback.NEUTRAL:
        return setNeutralFeedback(neutralFeedback + 1);
      case Feedback.BAD:
        return setBadFeedback(badFeedback + 1);
    }
  };

  return (
    <>
      <header>
        <Header text="give feedback" />
      </header>
      <main>
        <Button onClick={() => handleFeedback(Feedback.GOOD)} text="good" />
        <Button
          onClick={() => handleFeedback(Feedback.NEUTRAL)}
          text="neutral"
        />
        <Button onClick={() => handleFeedback(Feedback.BAD)} text="bad" />
        <section>
          <Header text="statistics" />
          <DisplayStatistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
          />
        </section>
      </main>
    </>
  );
};

export default App;
