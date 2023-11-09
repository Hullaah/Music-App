import Button from "@mui/material/Button";
import Grid  from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
export default function CreateRoomPage () {
  const defaultVotes = 2;
  const [state, setState] = useState({
    guestCanPause: true,
    votesToSkip: defaultVotes
  });
  function handleClick() {
    fetch("/api/create-room/", {
      method: "POST",
      headers: new Headers({"Content-Type": "application/json"}),
      body: JSON.stringify({
        "guest_can_pause": state.guestCanPause,
        "votes_to_skip": state.votesToSkip,
      })
    }).then((response) => response.json()).then((data) => console.log(data));
  }
  console.log(state);
  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <Typography variant="h4">
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            Guest control of playback State
          </FormHelperText>
          <RadioGroup row defaultValue={true}
            onChange={(e) => setState({...state, guestCanPause: Boolean(e.target.value)})}
          >
            <FormControlLabel
              value={true}
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value={false}
              control={<Radio color="secondary" />}
              label="No control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            defaultValue={defaultVotes}
            inputProps={{
              min: 1,
              style: {
                textAlign: "center"
              }
            }}
            onChange={(e) => setState({
              ...state,
              votesToSkip: parseInt(e.target.value)
            })}
          />
          <FormHelperText>Votes Required to Skip Song</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" onClick={handleClick}>Create A Room</Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" to = "/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  );
}
