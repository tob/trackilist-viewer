import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Stack, Card, CardHeader, Avatar, CardActionArea, Typography } from "@mui/material";
import { Song } from "./components/Song";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSongs } from "./services/profileService";

const SongList = () => {
  const [songs, setSongs] = useState(null);
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    console.log(ev.currentTarget.id)
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragSong = songs.find((song) => song._id === dragId);
    const dropSong = songs.find((song) => song._id === ev.currentTarget.id);

    const dragSongOrder = dragSong.order;
    const dropSongOrder = dropSong.order;

    const newSongsState = songs.map((song) => {
      if (song._id === dragId) {
        song.order = dropSongOrder;
      }
      if (song._id === ev.currentTarget.id) {
        song.order = dragSongOrder;
      }
      return song;
    });
    newSongsState.sort((a, b) => {
      return a.order - b.order;
    });

    console.log(newSongsState)
    setSongs(newSongsState);
  };

  useEffect(() => {
    async function getSongs() {
      if (!songs) {
        const response = await getAllSongs();
        response.sort((a, b) => {
          return a.order - b.order;
        });
        setSongs(response);
      }
    }

    getSongs();
  }, [songs]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>RussMatazz</h1>
            <p>This is a little web app to handle our tracklist</p>
          </Route>
          <Route path="/:songId">
            {songs ? <Song songs={songs} /> : "no songs yet"}
          </Route>
          <Route path="/">
            <Stack spacing={2}>
              {songs && songs.length > 0 ? (
                songs.map((song, index) => (
                  <Card
                    id={song._id}
                    key={song._id}
                    draggable={true}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                  >
                    <CardActionArea component={Link} to={`/${song._id}`}>
                      <CardHeader
                        avatar={<Avatar aria-label="song">{index + 1}</Avatar>}
                        action={
                          <Typography>{song.version}</Typography>
                        }
                        title={song.title}
                      />
                    </CardActionArea>
                  </Card>
                ))
              ) : (
                <p>No songs found</p>
              )}
            </Stack>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default SongList;
