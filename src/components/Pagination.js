import React, { useContext } from "react";
import { CharactersContext } from "../CharactersContext";
import previous_icon from "../images/previous.svg";

const Pagination = ({ pageNumber, setPageNumber, size }) => {
  const { characters } = useContext(CharactersContext);

  let arrayOfCharacters = [[]];
  for (let i = 0; i < characters.length; i += size) {
    arrayOfCharacters.push(characters.slice(i, i + size));
  }

  let pageNumbersArray = [];
  for (let i = 0; i < arrayOfCharacters.length - 1; i += 1) {
    pageNumbersArray.push(i);
  }

  return (
    <div className="pageNumberWrapper">
      <button
        className={pageNumber === 0 ? "pageNumber active" : "pageNumber"}
        onClick={() => setPageNumber((prevValue) => prevValue - 1)}
        disabled={pageNumber === 0 ? true : false}
      >
        <img src={previous_icon} alt="previous icon" />
      </button>
      {pageNumbersArray.map((number) => (
        <button
          className={pageNumber === number ? "pageNumber active" : "pageNumber"}
          key={number}
          onClick={() => setPageNumber(number)}
        >
          {number + 1}
        </button>
      ))}
      <button
        className={
          pageNumber === arrayOfCharacters.length - 2
            ? "pageNumber active"
            : "pageNumber"
        }
        onClick={() => setPageNumber((prevValue) => prevValue + 1)}
        disabled={pageNumber === arrayOfCharacters.length - 2 ? true : false}
      >
        <img src={previous_icon} alt="next icon" className="next" />
      </button>
    </div>
  );
};

export default Pagination;
