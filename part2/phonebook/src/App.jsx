import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const reset = () => {
    setNewName("");
    setNewNumber("");
  };

  const nameValidation = (name) => {
    const nameFound = persons.find((person) => person.name === name);
    if (nameFound) {
      throw new Error();
    }
  };

  const handleNameError = () => {
    alert(`${newName} is already added to phonebook`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      nameValidation(newName);
      setPersons([...persons, { name: newName, number: newNumber }]);
      reset();
    } catch (e) {
      handleNameError();
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setNewName(name);
  };

  const handleNumberChange = (event) => {
    const number = event.target.value;
    setNewNumber(number);
  };

  const handleFilterInput = (event) => {
    const filterInput = event.target.value;
    setFilterInput(filterInput);
  };

  const filterPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterInput={handleFilterInput} filterInput={filterInput} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} />
    </div>
  );
};

export default App;
