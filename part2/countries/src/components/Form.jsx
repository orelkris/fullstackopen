const Form = ({ handleInput, searchInput }) => {
  return (
    <form>
      <label htmlFor="countries">find countries</label>
      <input id="countries" value={searchInput} onChange={handleInput} />
    </form>
  );
};

export default Form;
