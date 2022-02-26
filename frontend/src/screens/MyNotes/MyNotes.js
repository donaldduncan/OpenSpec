import MainScreen from "../../components/MainScreen";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Chip,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import notes from "../../data/notes";
import "./MyNotes.css";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };
  console.log(notes);
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome to OpenSpec, DonnieDuncles!">
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="createClause"
      >
        Create new clause
      </Button>
      {notes.map((note) => (
        <Card className="clause" key={note._id}>
          <CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <>
                  <IconButton
                    component={RouterLink}
                    to={`/note/${note._id}`}
                    aria-label="settings"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteHandler(note._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              title={note.title}
              subheader={note.date}
            />
            <Typography variant="h5" component="div">
              {note.title}
            </Typography>

            <Chip
              size="small"
              label={`Category - ${note.category}`}
              color="success"
              variant="outlined"
              onDelete={() => {}}
            />
            <Typography variant="body2">{note.content}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
