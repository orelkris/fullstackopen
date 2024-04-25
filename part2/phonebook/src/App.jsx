import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  const dataHandler = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(dataHandler, []);

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
