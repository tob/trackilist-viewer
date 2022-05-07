import React, { useState } from "react";
import {
  Stack,
  Fab,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  NavigateBefore,
  Lyrics,
  NavigateNext,
  Add,
  Remove,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

export const Navigation = ({
  prev,
  next,
  increaseFontSize,
  decreaseFontSize,
  title,
}) => {
  const [value, setValue] = useState();
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column-reverse",
        alignItems: "center",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels={false}
      >
        <BottomNavigationAction
          icon={
            <Stack direction={"row"}>
              <NavigateBefore />
              <Typography variant="caption" noWrap maxWidth={"69px"}>
                {prev.title}
              </Typography>
            </Stack>
          }
          LinkComponent={Link}
          to={`/${prev.id}`}
        />
        <BottomNavigationAction
          label="Song List"
          icon={<Lyrics />}
          LinkComponent={Link}
          to="/"
        />
        <BottomNavigationAction
          icon={
            <Stack direction={"row"}>
              <Typography variant="caption" noWrap maxWidth={"69px"}>
                {next.title}
              </Typography>
              <NavigateNext />
            </Stack>
          }
          LinkComponent={Link}
          to={`/${next.id}`}
        />
      </BottomNavigation>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        display="flex"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography noWrap maxWidth="40%">
          {title}
        </Typography>
        <BottomNavigationAction
          icon={<Add />}
          aria-label="increase"
          onClick={increaseFontSize}
        />
        <BottomNavigationAction
          icon={<Remove />}
          aria-label="decrease"
          onClick={decreaseFontSize}
        />
      </BottomNavigation>
    </Paper>
  );
};
