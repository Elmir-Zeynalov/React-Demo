export default function Search({ onSearchInput }) {
  function handleInputChange(e) {
    console.log(e.target.value);
    onSearchInput(e.target.value);
  }
  return <input type="text" onChange={handleInputChange} />;
}
