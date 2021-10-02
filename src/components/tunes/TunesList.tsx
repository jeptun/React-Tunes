import React from "react";
import { Song } from "../../types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// styles
import "./TunesList.css";

// children
import TunesSong from "./TunesSong";

//propst
interface Props {
    songs: Song[]
}

//component
const TunesList = (props: Props) => {

    const { songs } = props

  //template
  return (
    <TransitionGroup component="ul" className="tunes-list">
      {songs.map(song => (
        <CSSTransition key={song.id} timeout={200} classNames="song">
        <li key={song.id}>
          <TunesSong song={song} />
        </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TunesList;
