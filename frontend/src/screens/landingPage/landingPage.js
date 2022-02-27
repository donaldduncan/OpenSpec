import React from "react";
import { Button, Container, Stack } from "@mui/material";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <div className="welcome">
          <h1 className="title">Welcome to OpenSpec</h1>
          <p className="subtitle">Knock yourself out!</p>
        </div>
        <Stack className="buttonContainer" spacing={2} direction="row">
          <Button
            className="landingButton"
            variant="contained"
            size="large"
            color="primary"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            className="landingButton"
            variant="contained"
            size="large"
            color="secondary"
            component={Link}
            to="/register"
          >
            Signup
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default LandingPage;
