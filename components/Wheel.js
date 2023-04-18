import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Jokeripokeri_test from "../public/static/sounds/Jokeripokeri-test.mp3";
import { Grid } from "@mui/material";
import Image from "next/image";

function Wheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinValue, setSpinValue] = useState(0);
  const wheelRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blue, setBlue] = useState("");
  const [lightblue, setLightblue] = useState("");
  const [pink, setPink] = useState("");
  const [yellow, setYellow] = useState("");
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");

  function spinWheel() {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    const spinAmount = Math.ceil(Math.random() * 7200);
    const finalValue = spinValue + spinAmount;

    wheelRef.current.style.transform = `rotate(${finalValue}deg)`;
    setSpinValue(finalValue);

    setTimeout(() => {
      setIsSpinning(false);
    }, 13000);
  }

  function handleClick() {
    if (typeof window !== "undefined") {
      if (isPlaying) {
        return; // Don't do anything if audio is already playing
      }

      const audio = new Audio(Jokeripokeri_test);
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true); // Set state to indicate that audio is playing

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false); // Set state to indicate that audio is not playing
      }, 13000);
    }
  }

  return (
    <>
      <div className="image">
        <Image src="/jokeri-logo.png" alt="My Image" width={400} height={400} />
      </div>
      <div className="body">
        <div className="container">
          <div
            className="spinBtn"
            onClick={() => {
              if (!isSpinning) {
                spinWheel();
                handleClick();
                setIsSpinning(true);
              }
            }}
            disabled={isPlaying && isSpinning}
          >
            {isPlaying && isSpinning ? "WAIT" : "SPIN"}
          </div>
          <div className="wheel" ref={wheelRef}>
            <div className="number" style={{ "--i": 1, "--clr": "#ff6ec7" }}>
              <span>{pink}</span>
            </div>
            <div className="number" style={{ "--i": 2, "--clr": "#20b2aa" }}>
              <span>{lightblue}</span>
            </div>

            <div className="number" style={{ "--i": 3, "--clr": "#daa520" }}>
              <span>{yellow}</span>
            </div>

            <div className="number" style={{ "--i": 4, "--clr": "#ff340f" }}>
              <span>{red}</span>
            </div>

            <div className="number" style={{ "--i": 5, "--clr": "#3cb371" }}>
              <span>{green}</span>
            </div>

            <div className="number" style={{ "--i": 6, "--clr": "#4169e1" }}>
              <span>{blue}</span>
            </div>
          </div>
        </div>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "lightgrey",
          paddingTop: "40px",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={1} paddingRight={1}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Pink"
              variant="outlined"
              onChange={(e) => setPink(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Lightblue"
              variant="outlined"
              onChange={(e) => setLightblue(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Yellow"
              variant="outlined"
              onChange={(e) => setYellow(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Red"
              variant="outlined"
              onChange={(e) => setRed(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Green"
              variant="outlined"
              onChange={(e) => setGreen(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Blue"
              variant="outlined"
              onChange={(e) => setBlue(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Wheel;
