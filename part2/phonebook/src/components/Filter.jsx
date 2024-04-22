const Filter = ({ handleFilterInput, filterInput }) => {
  return (
    <form>
      <label for="filterPhonebook">filter shown with</label>
      <input
        id="filterPhonebook"
        value={filterInput}
        onChange={handleFilterInput}
      />
    </form>
  );
};

export default Filter;
