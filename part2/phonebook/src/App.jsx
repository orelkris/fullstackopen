import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import actions from "./services/persons";

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

  const confirmPersonUpdate = (name) => {
    return confirm(
      `${name} is already added to phonebook. Replace the old number with a new one?`
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      nameValidation(newName);
      actions
        .createPerson({ name: newName, number: newNumber })
        .then((newPerson) => setPersons([...persons, newPerson]));
      reset();
    } catch (e) {
      const isConfirmed = confirmPersonUpdate(newName);
      const personId = persons.find((person) => person.name === newName)?.id;

      isConfirmed
        ? actions
            .updatePerson(personId, {
              name: newName,
              number: newNumber,
            })
            .then((updatedPerson) => {
              setPersons(
                persons.map((person) =>
                  person.id === personId ? updatedPerson : person
                )
              );
            })
        : null;
      reset();
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

  // const filterPersons = persons.filter((person) =>
  //   person.name.toLowerCase().includes(filterInput.toLowerCase())
  // );

  const handleDeletion = (id) => {
    const person = persons.find((person) => person.id === id);
    const isConfirmed = confirm(`Delete ${person.name}?`);

    isConfirmed
      ? actions.deletePerson(id).then((deletedPerson) => {
          setPersons(
            persons.filter((person) => person.id !== deletedPerson.id)
          );
        })
      : null;
  };

  const dataHandler = () => {
    actions.getPersons().then((persons) => setPersons(persons));
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
      <Persons persons={persons} handleDeletion={handleDeletion} />
    </div>
  );
};

export default App;
