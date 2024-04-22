import Part from "./Part";
import Bold from "./Bold";

const Content = ({ parts }) => {
  const total = parts.reduce(
    (prevVal, currVal) => prevVal + currVal.exercises,
    0
  );
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Bold text={`total of ${total} exercises`} />
    </div>
  );
};

export default Content;
