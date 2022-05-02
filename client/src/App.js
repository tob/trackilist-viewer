import React, { useState, useEffect } from "react";
import { AppBar, Typography, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSongs } from "./services/profileService";

function App() {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    async function getSongss() {
      if (!songs) {
        const response = await getAllSongs();
        setSongs(response);
      }
    }

    getSongss();
  }, [songs]);

  const renderSong = (song) => {
    return (
      <li key={song._id}>
        <Typography variant="h3" gutterBottom component="div">
          {`${song.author} `}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {song.lyrics}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {song.duration}
        </Typography>
      </li>
    );
  };

  return (
    <div>
      <AppBar>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon color="action" />
        </Badge>
      </AppBar>
      <ul>
        {songs && songs.length > 0 ? (
          songs.map((song) => renderSong(song))
        ) : (
          <p>No songs found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
