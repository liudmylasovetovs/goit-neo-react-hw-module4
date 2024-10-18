import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = ({ onSubmit }) => {
  const { input, setInput } = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (input.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(input);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <button type="submit" className={styles.searchButton}><HiOutlineSearch /></button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;
