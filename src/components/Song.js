import React, { useState } from "react";
import { Stack, Typography, Fab } from "@mui/material";

import { useParams } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Song = ({ songs }) => {
  let { songId } = useParams();
  const song = songs.find((song) => song._id === songId);
  const [fontSize, setFontSize] = useState(1);
  const currentIndex = songs.indexOf(song) || 0;
  const prevSong =
    currentIndex > 0 ? songs[currentIndex - 1] : songs[songs.length - 1];

  const nextSong =
    currentIndex < songs.length - 1 ? songs[currentIndex + 1] : songs[0];

  const formattedLyrics =
    song && song.lyrics && song.lyrics.replace(/\\n/g, "<br />\n");

  const increaseFontSize = () => {
    setFontSize(fontSize + 0.1);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 0.1);
  };

  return song && song.title ? (
    <div>
      <Typography
        variant="body1"
        sx={{
          columns: `4 ${300 * fontSize}px`,
          columnGap: "4em",
          fontSize: `${fontSize}em`,
        }}
        dangerouslySetInnerHTML={{ __html: formattedLyrics }}
      ></Typography>
      <Navigation
        prev={prevSong._id}
        next={nextSong._id}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        title={song.title}
      />
    </div>
  ) : null;
};
