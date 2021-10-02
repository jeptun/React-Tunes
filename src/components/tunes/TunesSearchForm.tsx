import React, { useRef, ChangeEvent, FormEvent } from "react";
import { debounce } from 'lodash-es';

// styles
import "./TunesSearchForm.css";

//propst
interface Props {
  onSearch:(query: string) => void;
}

//component
const TunesSearchForm = (props: Props) => {
  //ref
  const searchInput = useRef<HTMLInputElement>(null);

  //submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForMusic();
  };

  //input element
  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchForMusic();
  }, 1600);

  //search for music
  const searchForMusic = () => {
    let searchString = searchInput.current?.value
    if (searchString) props.onSearch(searchString);
  };

  //template
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          ref={searchInput}
          onChange={handleInput}
          className="search"
        />
      </form>
    </div>
  );
};

export default TunesSearchForm;
