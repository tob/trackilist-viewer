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
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Song List"
          icon={<Lyrics />}
          LinkComponent={Link}
          to="/"
        />
        <BottomNavigationAction
          icon={<NavigateBefore />}
          LinkComponent={Link}
          to={`/${prev}`}
        />
        <BottomNavigationAction
          icon={<NavigateNext />}
          LinkComponent={Link}
          to={`/${next}`}
        />

        <Stack direction="row" spacing={2} sx={{ alignItems: "baseline" }}>
          <Typography>{title}</Typography>
          <Fab
            size="small"
            aria-label="increase"
            onClick={increaseFontSize}
            variant="outlined"
          >
            <Add />
          </Fab>
          <Fab
            variant="outlined"
            size="small"
            aria-label="decrease"
            onClick={decreaseFontSize}
          >
            <Remove />
          </Fab>
        </Stack>
      </BottomNavigation>
    </Paper>
  );
};
