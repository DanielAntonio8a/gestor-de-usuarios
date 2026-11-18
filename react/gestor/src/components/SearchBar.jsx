import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar usuario por nombre..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
