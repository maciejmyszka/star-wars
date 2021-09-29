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

      {pageNumbersArray.slice(0, 3).map((number) => (
        <button
          key={number}
          className={pageNumber === number ? "pageNumber active" : "pageNumber"}
          onClick={() => setPageNumber(number)}
          style={{
            display:
              pageNumber === pageNumbersArray.length ||
              pageNumber === pageNumbersArray.length - 1 ||
              pageNumber === pageNumbersArray.length - 2 ||
              pageNumber === pageNumbersArray.length - 3
                ? "block"
                : "none",
          }}
        >
          {number + 1}
        </button>
      ))}

      {pageNumbersArray.slice(0, pageNumbersArray.length - 3).map((number) => (
        <button
          className={pageNumber === number ? "pageNumber active" : "pageNumber"}
          key={number}
          onClick={() => setPageNumber(number)}
          style={{
            display:
              number === pageNumber ||
              number === pageNumber + 1 ||
              number === pageNumber + 2
                ? "block"
                : "none",
          }}
        >
          {number + 1}
        </button>
      ))}
      <p style={{ margin: "0 10px"}}>...</p>
      {pageNumbersArray
        .slice(pageNumbersArray.length - 3, pageNumbersArray.length)
        .map((number) => (
          <button
            key={number}
            className={
              pageNumber === number ? "pageNumber active" : "pageNumber"
            }
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
