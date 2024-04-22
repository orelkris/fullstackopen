import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Header = ({ text }) => <h1>{text}</h1>;

const Display = ({ text }) => <div>{text}</div>;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const DisplayMostPopular = ({ text, votes }) => {
  return (
    <>
      <Display text={text} />
      <Display text={`has ${votes} votes`} />
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdotesLength = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0));
  const [mostPopular, setMostPopular] = useState({
    anecdote: anecdotes[0],
    votes: votes[0],
  });

  const handleMostPopularAnecdote = (votes) => {
    const maxVote = Math.max(...votes);
    const indexOfLargest = votes.indexOf(maxVote);

    setMostPopular({
      anecdote: anecdotes[indexOfLargest],
      votes: votes[indexOfLargest],
    });
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

    handleMostPopularAnecdote(copy);
  };

  const handleChangeAnecdote = () => {
    const nextAnecdoteNumber = getRandomInt(0, anecdotesLength);
    setSelected(nextAnecdoteNumber);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <div>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleChangeAnecdote} text="next anecdote" />
      </div>
      <Header text="Anecdote with most votes" />
      <DisplayMostPopular
        text={mostPopular.anecdote}
        votes={mostPopular.votes}
      />
    </div>
  );
};

export default App;
