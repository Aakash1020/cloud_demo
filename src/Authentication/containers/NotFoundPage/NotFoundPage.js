import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Container, Paper } from "@material-ui/core";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  section_mainstartpage: {
    backgroundColor: "#05264c",
    display: "grid",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  paperStartPage: {
    display: "flex",
    zIndex: "1",
    textAlign: "center",
    flexDirection: "column",
    fontSize: "20px",
    padding: theme.spacing(3),
  },
}));
const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <>
      <div id="container"></div>
      <section className={classes.section_mainstartpage}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paperStartPage}>
            <Button variant="primary" size="lg">
              <Link to="/login">Get Started</Link>
            </Button>
          </Paper>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
