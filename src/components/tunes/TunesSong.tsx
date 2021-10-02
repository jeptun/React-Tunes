import React, { useMemo} from "react";
import { Song } from "../../types";
import { truncate } from "lodash-es";
// styles

import "./TunesSong.css";

// props
interface Props {
    song: Song
}

// component
const TunesSong = (props: Props) => {
    const { song  } = props

  // formatting text length to 100 char
  const songify = useMemo (
    ()=>( song: Song) : string =>{
      const newTitle = song.artist + ' - ' + song.title
      return shorten(newTitle, 100)
  }, [])

  // side effect

 

  /* truncate from lodash *
  / replaces the text with three dots after exceeding the length. 55 char 
  */
  const shorten = ( str: string, leng = 55 ) : string =>{
    return truncate(str, { length: leng})
  }

  //template
  return (
    <article className="song">
      <div className="inside">
        <h2>{songify(song)}</h2>
        <div className="player">
          { song.artwork && (  <img src={song.artwork} alt="album art"/>)}
          <audio controls src={song.audioFile} />
        
        </div>
      </div>
      <footer className="meta">{shorten(song.album)}</footer>
    </article>
  );
};

export default TunesSong;
