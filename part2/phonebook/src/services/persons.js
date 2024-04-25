import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = (person) => {
  return axios.post(baseUrl, person).then((response) => response.data);
};

const updatePerson = (id, updatedPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPerson)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
